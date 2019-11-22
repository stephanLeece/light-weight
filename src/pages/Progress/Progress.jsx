import React from 'react';

import { Wrap, Grid } from './styled';

const Progress = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot></Grid>
  </Wrap>
);

export default Progress;
