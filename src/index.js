import KickApi from './api/kick.js';
import downloadMedia from './lib/downloader.js';
import { convertTime } from './helpers.js';
import { input, select, confirm } from '@inquirer/prompts';
import ora from 'ora';

const handleExit = () => process.exit(0);
process.on('SIGINT', () => handleExit());
process.on('SIGTERM', () => handleExit());

const api = new KickApi();

const spinner = ora({
	text: 'Processing...',
	spinner: 'dots',
});

export const initialAction = async () => {
	try {
		const inputChannel = await input({
			message: 'Please, enter the Kick channel:',
			required: true,
		});

		spinner.start();
		const result = await api.searchKickChannel(inputChannel);
		spinner.stop();

		if (result.status === false) {
			console.log(`❌ ${inputChannel} not found 😿`);
			return;
		}

		const username = result.data.user.username;
		const contentType = await select({
			message: 'Select an option to list:',
			loop: true,
			choices: [
				{
					name: 'VODs',
					value: 'vod',
					description: `- List past VODs from ${username}, ideal for full streams.`,
				},
				{
					name: 'Clips',
					value: 'clip',
					description: `- List short clips from ${username}, perfect for highlights.`,
				},
			],
		});

		spinner.start();
		const contentList = await api.listKickContent(
			inputChannel,
			contentType
		);
		spinner.stop();

		if (contentList.status === false) {
			console.log(`❌ The content of ${username} is not avaible 😿`);
			return;
		}

		const orderedList = contentList.data.map((content) => {
			const hours = convertTime(content.duration);

			return {
				name:
					contentType === 'vod'
						? `${content.session_title} - ${hours} - ${content.start_time}`
						: `${content.title} - ${content.duration} seconds`,
				value:
					contentType === 'vod' ? content.source : content.clip_url,
				description:
					contentType === 'vod'
						? `- Description: ${content.session_title} | ${content.categories[0].name} | ${content.views} views`
						: `- Description: ${content.title} | ${content.category.name} | ${content.views} views`,
			};
		});

		const downloadLink = await select({
			message: `Select the ${contentType} to download:`,
			choices: [...orderedList],
			pageSize: 10,
			loop: false,
		});

		const confirmDownload = await confirm({
			message: `This ${contentType} will be downloaded, Continue?`,
		});

		if (confirmDownload) {
			spinner.start();
			await downloadMedia(contentType, downloadLink);
			spinner.stop();
		}
	} catch (error) {
		if (error.name === 'ExitPromptError') {
			console.info('\n================================');
			console.info('  Ah shit, here we go again 🐈  ');
			console.info('================================');
		}

		if (error.name === 'NetworkError') {
			console.error('❌ Network error... Please try again later');
		}
	} finally {
		handleExit();
	}
};
