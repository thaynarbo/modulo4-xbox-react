import React, { useState, useEffect } from "react";
import * as Style from "./styles";
import Card from "../Card";
import { Api } from "./../../api/api";
const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGames(), true);
      const result = await response.json();
      if (result.length <= 0) {
        setGames("");
      } else {
        setGames(result);
      }
    };
    loadGameList();
  }, []);
  if (!games) {
    return <h1 style={{ color: "#fff" }}>Não há jogos para mostrar</h1>;
  }
  return (
    <Style.Container>
      {games.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </Style.Container>
  );
};

export default GameList;
