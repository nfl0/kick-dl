import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const downloadMedia = async (contentType = 'media', downloadLink) => {
	const command = `youtube-dl -o ${contentType}.mp4 "${downloadLink}"`;

	try {
		const { stdout } = await execPromise(command);

		return stdout;
	} catch (error) {
		return error;
	}
};

export default downloadMedia;
