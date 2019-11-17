import React from 'react';

import { Wrap } from './styled';

const QuickCard = ({ children, className }) => <Wrap className={className}>{children}</Wrap>;

export default QuickCard;
