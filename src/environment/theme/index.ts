import { DefaultTheme } from 'styled-components';

const sizes = {
	xs: '320px',
	sm: '425px',
	md: '768px',
	lg: '1024px',
	xl: '1440px',
	hd: '1920px'
};

const colors = {
	transparent: 'transparent',
	black: '#000',
	white: '#FFF',
	primary: {
		medium: '#495060',
		dark: '#2A2E39'
	}
};

export const theme: DefaultTheme = { colors, sizes };
