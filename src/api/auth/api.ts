import { buildUrl, sendRequest } from '../utils';
import { ICredentials, ILogin } from './types';

const ENDPOINTS = {
	LOGIN: '/login'
};

export default () => ({
	login: async (creds: ICredentials): Promise<string | null> => {
		try {
			const url = buildUrl(ENDPOINTS.LOGIN);
			const { data }: ILogin = await sendRequest({ url, method: 'POST', data: creds });

			if (data.token) {
				return data.token;
			}

			return null;
		} catch (e) {
			throw new Error(e.message);
		}
	}
});
