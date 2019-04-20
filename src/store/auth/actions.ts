import { ActionCreator } from 'redux';
import uuid from 'uuid/v4';

import { IThunk } from '../types';
import { beginActivity, endActivity, setError } from '../ui/activities';
import { ActionTypes, ICredentials, ILoginAction } from './types';

/**
 * Sends a POST request to the API to authenticate the user
 */

const loginAction: ActionCreator<ILoginAction> = (token: string) => ({
	type: ActionTypes.LOGIN,
	payload: { token }
});

export const login = (creds: ICredentials): IThunk => async dispatch => {
	const activityId = uuid();

	try {
		await dispatch(beginActivity({ type: ActionTypes.LOGIN, uuid: activityId }));
		// TBA
	} catch (e) {
		await dispatch(
			setError({
				type: ActionTypes.LOGIN,
				error: e.message,
				uuid: uuid()
			})
		);
	} finally {
		await dispatch(endActivity({ uuid: activityId }));
	}
};
