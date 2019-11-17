import React from 'react';

import { Wrap, Grid, PlanPreview, SessionPreview, DataPreview } from './styled';

const Home = () => (
	<Wrap>
		<Grid isRoot>
			<PlanPreview />
			<SessionPreview />
			<DataPreview />
		</Grid>
	</Wrap>
);

export default Home;
