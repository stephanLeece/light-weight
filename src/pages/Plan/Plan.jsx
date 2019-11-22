import React from 'react';

import { Wrap, Grid } from './styled';

const Plan = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot></Grid>
  </Wrap>
);

export default Plan;
