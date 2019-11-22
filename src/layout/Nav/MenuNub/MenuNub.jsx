import React from 'react';
import nibImg from 'icons/nibIcon.svg';
import { Wrap, NibIcon } from './styled';
import { Link } from 'react-router-dom';

const MenuNub = ({ className }) => (
  <Wrap className={className}>
    <Link to="/">
      <NibIcon src={nibImg} />
    </Link>
  </Wrap>
);

export default MenuNub;
