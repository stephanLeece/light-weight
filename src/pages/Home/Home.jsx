import React from 'react';

import { Wrap } from './styled';
import QuickCard from 'common/Card/Quick';
import GridWrap from 'layout/GridWrap';

const Home = () => (
	<Wrap>
		<GridWrap isRoot>
			<QuickCard>welcome to the home page</QuickCard>
		</GridWrap>
	</Wrap>
);

export default Home;
