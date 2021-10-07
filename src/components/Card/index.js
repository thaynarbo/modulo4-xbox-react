import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
const Card = () => {
	const id = 4;
	return (
		<S.Container>
			<Link to={`/details/${id}`}>
				<div className='cover-img'>
					<img
						src='https://static1-br.millenium.gg/portals/5/45/@/45-legends-of-runeterra-game-cover-portal_cover_bd-1.png'
						alt=''
					/>
				</div>
			</Link>
			<h2>League of Legends</h2>
		</S.Container>
	);
};

export default Card;
