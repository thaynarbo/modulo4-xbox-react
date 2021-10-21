import React from "react";
import * as Style from "./styles";
import Input from "../Input";
import { Api } from "../../api/api";
import Button from "../Button";

const CreateProfile = (props) => {
  const id = localStorage.getItem("USER_ID");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nickname = e.target.nickname.value;
    const image = e.target.image.value;
    const userId = id;

    const payload = {
      nickname,
      image,
      userId,
    };

    const response = await Api.buildApiPostRequest(
      Api.createProfileUrl(),
      payload,
      true
    );
    const body = await response.json();
    if (response.status === 201) {
      props.history.push("/");
    }
  };
  return (
    <Style.Container onSubmit={handleSubmit}>
      <div className="input-container">
        <Input name="nickname" id="nickname" text="Nickname" />
        <Input name="image" id="image" text="Imagem" />
      </div>
      <Button text="Cadastrar Jogo" green={true} />
    </Style.Container>
  );
};

export default CreateProfile;
