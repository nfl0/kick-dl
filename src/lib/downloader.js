import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

const downloadMedia = async (contentType = 'media', downloadLink, fileName, retryCount = 3) => {
	const command = `youtube-dl -o ${fileName}.mp4 "${downloadLink}"`;

	for (let attempt = 1; attempt <= retryCount; attempt++) {
		try {
			const { stdout } = await execPromise(command);
			return stdout;
		} catch (error) {
			if (attempt === retryCount) {
				return error;
			}
		}
	}
};

const downloadAllMedia = async (contentType = 'media', downloadLinks) => {
	for (const [index, downloadLink] of downloadLinks.entries()) {
		const fileName = `${contentType}_${index + 1}_${Date.now()}`;
		await downloadMedia(contentType, downloadLink, fileName);
	}
};

export { downloadMedia, downloadAllMedia };
