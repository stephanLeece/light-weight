import React from 'react';

import {
  Wrap,
  Grid,
  PlanLink,
  PlanPreview,
  SessionLink,
  SessionPreview,
  ProgressLink,
  ProgressPreview,
} from './styled';

const Home = () => (
  <Wrap>
    <Grid isRoot>
      <PlanLink to="/plan">
        <PlanPreview />
      </PlanLink>
      <SessionLink to="/session">
        <SessionPreview />
      </SessionLink>
      <ProgressLink to="/progress">
        <ProgressPreview />
      </ProgressLink>
    </Grid>
  </Wrap>
);

export default Home;
