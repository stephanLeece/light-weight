import React from 'react';

import { Wrap } from './styled';

const PageLoader = ({ className }) => (
  <Wrap className={className}>
    <p>I'm a page and i'm loading</p>
  </Wrap>
);

export default PageLoader;
