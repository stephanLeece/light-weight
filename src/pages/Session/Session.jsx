import React from 'react';

import { Wrap, Grid } from './styled';

const Session = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot></Grid>
  </Wrap>
);

export default Session;
