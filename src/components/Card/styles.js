import styled from 'styled-components';
import { theme } from './../../styles/themes';
export const Container = styled.div`
	border-radius: 0.85rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	max-width: 300px;

	.cover-img {
		display: flex;
		justify-content: center;
		width: 250px;
		max-width: 400px;

		img {
			width: 80%;
			border-radius: 0.85rem;
		}
		&:hover {
			opacity: 0.4;
		}
	}
	h2 {
		color: ${theme.colors.white};
	}
`;
