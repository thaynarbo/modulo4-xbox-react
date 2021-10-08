import styled from 'styled-components';
import { theme, css } from './../../styles/themes';

export const Container = styled.button`
	background: ${(p) => (p.green ? theme.colors.green2 : theme.colors.green1)};
	border: none;
	padding: 1.2rem 1.8rem;
	border-radius: 0.85rem;
	font-size: ${theme.fontSizes.p1};
	cursor: pointer;
	&:hover {
		background: ${theme.colors.green3};
	}
`;
