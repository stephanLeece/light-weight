import React from 'react';

import { Wrap, Grid } from './styled';

const Session = ({ className }) => (
  <Wrap className={className}>
    <Grid isRoot>
      <p>You'll see details about your next session when you've chosen a plan</p>
    </Grid>
  </Wrap>
);

export default Session;
