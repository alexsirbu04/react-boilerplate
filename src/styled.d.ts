import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		sizes: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			hd: string;
		};
		colors: {
			transparent: string;
			black: string;
			white: string;
			primary: {
				medium: string;
				dark: string;
			};
		};
	}
}
