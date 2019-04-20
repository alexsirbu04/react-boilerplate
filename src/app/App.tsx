import React from 'react';

import { Context } from './Context';
import { Routes } from './Routes';
import { Store } from './Store';

export const App: React.FC = () => (
	<Context>
		<Store>
			<Routes />
		</Store>
	</Context>
);
