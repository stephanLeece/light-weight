import React from 'react';

import { Wrap, Title } from './styled';

const ProgressPreview = ({ className }) => {
  return (
    <Wrap className={className}>
      <Title>You'll see your overall progress here once you've started a plan</Title>
    </Wrap>
  );
};

export default ProgressPreview;
