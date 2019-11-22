import React from 'react';
import nibImg from 'icons/nibIcon.svg';
import { Wrap, NibIcon } from './styled';

const MenuNub = ({ className }) => (
    <Wrap className={className}>
        <NibIcon src={nibImg} />
    </Wrap>
);

export default MenuNub;
