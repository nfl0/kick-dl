import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

const downloadMedia = async (contentType = 'media', downloadLink, fileName) => {
	const command = `youtube-dl -o ${fileName}.mp4 "${downloadLink}"`;

	try {
		const { stdout } = await execPromise(command);

		return stdout;
	} catch (error) {
		return error;
	}
};

const downloadAllMedia = async (contentType = 'media', downloadLinks) => {
	for (const [index, downloadLink] of downloadLinks.entries()) {
		const fileName = `${contentType}_${index + 1}`;
		await downloadMedia(contentType, downloadLink, fileName);
	}
};

export { downloadMedia, downloadAllMedia };
