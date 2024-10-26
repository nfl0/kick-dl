import KickScraper from '../lib/scraper.js';

const Scraper = new KickScraper();

export default class KickApi {
	searchKickChannel = async (channel) => {
		try {
			const result = await Scraper.fetchChannelData(channel);

			return {
				status: true,
				data: result,
			};
		} catch (error) {
			return {
				status: false,
				message: error.message,
			};
		}
	};

	listKickContent = async (channel, contentType) => {
		try {
			if (contentType === 'vod') {
				const result = await Scraper.fetchVideoData(channel);
				return {
					status: true,
					data: result,
				};
			}

			const result = await Scraper.fetchClipData(channel);
			return {
				status: true,
				data: result['clips'],
			};
		} catch (error) {
			return {
				status: false,
				message: error.message,
			};
		}
	};

	fetchAllVods = async (channel) => {
		try {
			const result = await Scraper.fetchVideoData(channel);
			return {
				status: true,
				data: result,
			};
		} catch (error) {
			if (error.message.includes('403')) {
				return {
					status: false,
					message: 'Failed to load URL: 403 - Access Forbidden',
				};
			}
			return {
				status: false,
				message: error.message,
			};
		}
	};
}
