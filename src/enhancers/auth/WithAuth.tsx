import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { IApplicationState } from '../../store';
import { ICredentials, login } from '../../store/auth';
import { IThunkDispatch } from '../../store/types';

interface IDataProps {
	token: string | null;
}

interface IActionProps {
	login: (creds: ICredentials) => void;
}

type IProps = IDataProps & IActionProps;

interface IChildren {
	children: (props: IProps) => JSX.Element;
}

const Enhancer: React.FC<IProps & IChildren> = ({ children, ...props }) => children(props);

const selectToken = createSelector(
	(state: IApplicationState) => state.auth.token,
	token => token
);

const mapStateToProps = (state: IApplicationState) => ({
	token: selectToken(state)
});

const mapDispatchToProps = (dispatch: IThunkDispatch) => ({
	login: (creds: ICredentials) => dispatch(login(creds))
});

export const WithAuth = connect(
	mapStateToProps,
	mapDispatchToProps
)(Enhancer);
