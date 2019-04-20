export interface ICredentials {
	email: string;
	password: string;
}

export interface ILogin {
	data: {
		token: string;
	};
}
