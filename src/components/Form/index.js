import React from "react";
import * as Style from "./styles";
import Input from "../Input";
import { AiOutlineUser } from "react-icons/ai";
import { RiLock2Fill } from "react-icons/ri";
import Button from "../Button";
import { Api } from "../../api/api";

const Form = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);
    const body = await response.json();
    if (response.status === 200) {
      const accessToken = body.accessToken;
      localStorage.setItem("JWT", accessToken);
      props.history.push("/home");
    }
  };
  return (
    <Style.Container onSubmit={handleSubmit}>
      <div className="input-container">
        <Input name="email" id="email" text="Email" icon={<AiOutlineUser />} />
        <Input
          name="password"
          type="password"
          id="password"
          text="Senha"
          icon={<RiLock2Fill />}
        />
      </div>
      <Button text="Entrar" green={true} />
    </Style.Container>
  );
};

export default Form;
