import React from 'react';

import { Wrap, Title } from './styled';

const SessionPreview = ({ className }) => {
  return (
    <Wrap className={className}>
      <Title>You'll see details about your next session when you've chosen a plan</Title>
    </Wrap>
  );
};

export default SessionPreview;
