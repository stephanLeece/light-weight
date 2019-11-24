import styled from 'styled-components';
import { COLORS } from 'constants/colors';

const Wrap = styled.div`
  display: flex;
  background: ${COLORS.ACCENT_DARK_BLUE};
  border-radius: 16px;
  padding: 16px;
  min-height: 100px;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export { Wrap };
