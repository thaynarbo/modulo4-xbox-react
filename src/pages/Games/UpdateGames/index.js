import React from "react";
import * as Style from "./styles";
import CreateGame from "../../../components/CreateGame";
import UpdateGame from "../../../components/UpdateGame";
const UpdateGames = (props) => {
  return (
    <Style.Container>
      <UpdateGame {...props} />
    </Style.Container>
  );
};

export default UpdateGames;
