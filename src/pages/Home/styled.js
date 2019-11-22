import styled from 'styled-components';
import QuickCard from 'common/Card/Quick';
import GridWrap from 'layout/GridWrap';
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

export const PlanPreview = styled(QuickCard)`
	grid-area: plan;
`;

export const SessionPreview = styled(QuickCard)`
	grid-area: session;
`;

export const DataPreview = styled(QuickCard)`
	grid-area: data;
`;
