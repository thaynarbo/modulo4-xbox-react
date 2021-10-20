import React from "react";
import * as Style from "./styles";
import CreateGame from "../../../components/CreateGame";
const CreateGames = (props) => {
  return (
    <Style.Container>
      <CreateGame {...props} />
    </Style.Container>
  );
};

export default CreateGames;
