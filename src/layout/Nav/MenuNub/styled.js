import styled from 'styled-components';

import { COLORS } from 'constants/colors';

const Wrap = styled.div`
  background: ${COLORS.ACCENT_LIGHT_YELLOW};
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 100px 100px 0 0;
  height: 50px;
  width: 100px;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const NibIcon = styled.img``;

export { Wrap, NibIcon };
