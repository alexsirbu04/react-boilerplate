import { auth } from './auth';

export const apiFactory = () => ({
	auth: () => auth()
});
export type IApiFactory = ReturnType<typeof apiFactory>;
