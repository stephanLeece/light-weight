import styled from 'styled-components';

import { COLORS } from 'constants/colors';

const Wrap = styled.div`
	position: fixed;
	bottom: 0;
	left: 50%;
	margin-left: -50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px 100px 0 0;
	height: 50px;
	width: 100px;
	&:hover {
		border: 1px solid black;
	}
`;

export { Wrap };
