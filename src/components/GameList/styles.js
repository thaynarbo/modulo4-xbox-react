import styled, { css } from 'styled-components';
import { theme } from './../../styles/themes';

export const Container = styled.div`
	margin: 1rem auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 80vw;
	min-width: 250px;
	background: ${theme.colors.black10};
	border-radius: 0.85rem;

	@media screen and (min-width: 356px) {
		display: flex;
		align-items: center;
	}
`;
