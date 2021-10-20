import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import DefaultImg from "./../../assets/no-cover.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const imageNotFound = (event) => {
  event.target.attributes.src.value = DefaultImg;
};
const Card = ({ game }) => {
  return (
    <S.Container>
      <Link to={`/details/${game.id}`}>
        <div className="cover-img">
          <img src={game.gameCover} onError={imageNotFound} alt="" />
          <div className="badge">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png"
              alt=""
            />
          </div>
        </div>
      </Link>
      <h2>{game.title}</h2>
    </S.Container>
  );
};

export default Card;
