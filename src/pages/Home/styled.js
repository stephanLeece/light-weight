import styled from 'styled-components';
import { Link } from 'react-router-dom';

import GridWrap from 'layout/GridWrap';
import PlanPreview from './PlanPreview';
import ProgressPreview from './ProgressPreview';
import SessionPreview from './SessionPreview';
import { COLORS } from 'constants/colors';

export const Wrap = styled.div`
  height: 100vh;
  padding: 5vw 0;
  background: ${COLORS.SHADE_LIGHT_GREY};
`;

export const Grid = styled(GridWrap)`
  height: 100%;
  grid-row-gap: 32px;
  grid-column-gap: 32px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'plan plan plan plan plan plan data data data data data data'
    'session session session session session session data data data data data data';
`;

export const PlanLink = styled(Link)`
  grid-area: plan;
  text-decoration: none;
`;

export const SessionLink = styled(Link)`
  grid-area: session;
  text-decoration: none;
`;

export const ProgressLink = styled(Link)`
  grid-area: data;
  text-decoration: none;
`;

export const PlanCard = styled(PlanPreview)`
  height: 100%;
`;

export const SessionCard = styled(SessionPreview)`
  height: 100%;
`;

export const ProgressCard = styled(ProgressPreview)`
  height: 100%;
`;
