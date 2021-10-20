import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const Container = styled.div`
	background: ${theme.colors.green1};

	width: 40px;
	height: 40px;
	position: relative;
	svg {
		position: absolute;
		transform: translate(50%, -50%);
		font-size: 25px;
		top: 50%;
		right: 50%;
		color: ${theme.colors.black20};
	}
`;
