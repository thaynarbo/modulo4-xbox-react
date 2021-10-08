import styled from 'styled-components';
import { theme } from './../../styles/themes';

export const Container = styled.form`
	padding: 2rem 1rem;
	border-radius: 0.85rem;
	min-width: 300px;
	background: ${theme.colors.black40};
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	.input-container {
		margin: auto 0;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		height: 100%;
	}

	button {
		margin-top: 1rem;
	}
	@media (min-width: 400px) {
		min-width: 370px;
	}
`;
