import React from 'react';

import {
  Wrap,
  Grid,
  PlanLink,
  PlanCard,
  SessionLink,
  SessionCard,
  ProgressLink,
  ProgressCard,
} from './styled';

const Home = ({ className }) => {
  return (
    <Wrap className={className}>
      <Grid isRoot>
        <PlanLink to="/plan">
          <PlanCard />
        </PlanLink>
        <SessionLink to="/session">
          <SessionCard />
        </SessionLink>
        <ProgressLink to="/progress">
          <ProgressCard />
        </ProgressLink>
      </Grid>
    </Wrap>
  );
};

export default Home;
