import React from "react";
import * as Style from "./styles";
import Input from "../Input";
import { Api } from "../../api/api";
import Button from "../Button";

const CreateGame = (props) => {
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

    const response = await Api.buildApiPostRequest(
      Api.createGameUrl(),
      payload,
      true
    );
    const body = await response.json();
    if (response.status === 201) {
      props.history.push("/home");
    }
  };
  return (
    <Style.Container onSubmit={handleSubmit}>
      <div className="input-container">
        <Input name="title" id="title" text="Titulo" />
        <Input name="cover" id="cover" text="Capa do Jogo" />
        <Input name="description" id="description" text="descrição" />
        <Input name="year" id="year" text="ano" />
        <Input name="imdb" id="imdb" text="imdb" />
        <Input name="trailer" id="trailer" text="trailer" />
        <Input name="gameplay" id="gameplay" text="gameplay" />
      </div>
      <Button text="Cadastrar Jogo" green={true} />
    </Style.Container>
  );
};

export default CreateGame;
