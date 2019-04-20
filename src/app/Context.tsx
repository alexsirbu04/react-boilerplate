import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../environment';

export const Context: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
