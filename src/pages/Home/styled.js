import styled from 'styled-components';
import QuickCard from 'common/Card/Quick';
import GridWrap from 'layout/GridWrap';
import { COLORS } from 'constants/colors';
import { Link } from 'react-router-dom';

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
`;

export const SessionLink = styled(Link)`
  grid-area: session;
`;

export const ProgressLink = styled(Link)`
  grid-area: data;
`;

export const PlanPreview = styled(QuickCard)`
  height: 100%;
`;

export const SessionPreview = styled(QuickCard)`
  height: 100%;
`;

export const ProgressPreview = styled(QuickCard)`
  height: 100%;
`;
