import React from 'react';

export interface IEnhancedData {}

export interface IEnhancedActions {}

interface IEnhancedProps {
	data: IEnhancedData;
	actions: IEnhancedActions;
}

interface IProps {
	children(props: IEnhancedProps): JSX.Element;
}

export const Enhancer: React.FC<IProps> = ({ children }) =>
	children({
		data: {},
		actions: {}
	});
