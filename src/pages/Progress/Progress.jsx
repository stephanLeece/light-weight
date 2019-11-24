import React from 'react';

import { Wrap, Grid } from './styled';

const Progress = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot>
      <p>You'll see your overall progress here once you've started a plan</p>
    </Grid>
  </Wrap>
);

export default Progress;
