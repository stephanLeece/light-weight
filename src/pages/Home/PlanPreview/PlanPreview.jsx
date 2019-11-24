import React from 'react';

import { Wrap, Title } from './styled';

const PlanPreview = ({ className }) => {
  return (
    <Wrap className={className}>
      <Title>You haven't chosen a plan yet, why not try one out?</Title>
    </Wrap>
  );
};

export default PlanPreview;
