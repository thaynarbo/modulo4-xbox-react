import styled from 'styled-components';
import { theme } from './../../styles/themes';

export const Container = styled.div`
	position: relative;

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		margin-left: 0.5rem;
		font-size: 1rem;
	}
`;

export const ContainerInput = styled.input`
	height: 20px;
	padding: 1.4rem;
	border-radius: 0.7rem;
	border: none;
	width: 100%;
	font-size: ${theme.fontSizes.p1};
	padding-left: ${({ icon }) => icon && theme.spacing.space5};
`;
