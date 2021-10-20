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
		position: relative;

		img {
			width: 80%;
			border-radius: 0.85rem;
		}
		&:hover {
		}
	}
	h2 {
		margin-top: 20px;
		color: ${theme.colors.white};
	}
	.badge {
		position: absolute;
		bottom: 0;
		background: ${theme.colors.black10};
		width: 70px;
		height: 70px;
		transform: translateY(30%);
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 70%;
			color: blue;
		}
	}
`;
