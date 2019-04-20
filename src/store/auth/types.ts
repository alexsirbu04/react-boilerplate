import { Action } from 'redux';

export { ICredentials } from '../../api/auth';

export interface IState {
	token: string | null;
}

export enum ActionTypes {
	LOGIN = 'auth/LOGIN'
}

export interface ILoginAction extends Action {
	type: ActionTypes.LOGIN;
	payload: {
		token: string;
	};
}

export type IAction = ILoginAction;
