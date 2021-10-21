import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Style from "./styles";
import { Api } from "../../api/api";
import DefaultImg from "./../../assets/no-cover.jpg";
const imageNotFound = (event) => {
  event.target.attributes.src.value = DefaultImg;
};
const Details = (props) => {
  const id = props.match.params.id;
  const [game, setGame] = useState("");
  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGames(id),
        true
      );

      const results = await response.json();

      setGame(results);
    };

    loadProduct();
  }, [id]);
  const handleDelete = async () => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteGameUrl(id),
      true
    );
    console.log(response);
    if (response.status === 200) {
      props.history.push(`/`);
    } else {
    }
  };
  return (
    <Style.Container>
      <Style.InfoContainer>
        <img src={game.gameCover} onError={imageNotFound} alt="" />
        <div className="game-info">
          <h2>{game.title}</h2>

          {/* {game.genres?.map((genre) => {
            return <h3>{genre}</h3>;
          })} */}

          <p>{`Descrição:${game.description}`}</p>
          <p>{`Ano:${game.year}`}</p>
          <p>{`IMDB:${game.imdb}`}</p>
          {/* <iframe src={game.trailer} frameBorder="0"></iframe> */}
          <div className="button-container">
            <Link to={`/update/${id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={handleDelete}>Excluir</button>
          </div>
        </div>
      </Style.InfoContainer>
    </Style.Container>
  );
};

export default Details;
