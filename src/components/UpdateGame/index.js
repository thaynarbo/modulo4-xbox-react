import React, { useState, useEffect } from "react";
import * as Style from "./styles";
import Input from "../Input";
import { Api } from "../../api/api";
import Button from "../Button";

const UpdateGame = (props) => {
  const id = props.match.params.id;
  const [game, setGame] = useState("");
  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGames(id),
        true
      );

      const results = await response.json();

      setGame(results);
    };

    loadGame();
  }, []);
  if (!game) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const gameCover = e.target.cover.value;
    const description = e.target.description.value;
    const year = parseInt(e.target.year.value);
    const imdb = parseFloat(e.target.imdb.value);
    const trailer = e.target.trailer.value;
    const gameplayLink = e.target.gameplay.value;

    const payload = {
      title,
      gameCover,
      description,
      year,
      imdb,
      trailer,
      gameplayLink,
    };
    try {
      const response = await Api.buildApiPatchRequest(
        Api.updateGameUrl(id),
        payload,
        true
      );
      if (!response) {
        throw new Error(`Errou algo ${response.status}`);
      }
      const body = await response.json();
      if (response.status === 200) {
        const id = body.id;
        props.history.push(`/details/${id}`);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Style.Container onSubmit={handleSubmit}>
      <div className="input-container">
        <Input
          name="title"
          id="title"
          text="Titulo"
          defaultValue={game.title}
        />
        <Input
          name="cover"
          id="cover"
          text="Capa do Jogo"
          defaultValue={game.gameCover}
        />
        <Input
          name="description"
          id="description"
          text="descrição"
          defaultValue={game.title}
        />
        <Input name="year" id="year" text="ano" defaultValue={game.year} />
        <Input name="imdb" id="imdb" text="imdb" defaultValue={game.imdb} />
        <Input
          name="trailer"
          id="trailer"
          text="trailer"
          defaultValue={game.trailer}
        />
        <Input
          name="gameplay"
          id="gameplay"
          text="gameplay"
          defaultValue={game.gameplayLink}
        />
      </div>
      <Button text="Editar" green={true} />
    </Style.Container>
  );
};

export default UpdateGame;
