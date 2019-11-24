import React from 'react';

import { Wrap, Grid } from './styled';

const Plan = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot>
      <p>You haven't chosen a plan yet, why not try one out?</p>
    </Grid>
  </Wrap>
);

export default Plan;
