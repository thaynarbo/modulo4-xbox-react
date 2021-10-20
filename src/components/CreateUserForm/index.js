import React from "react";
import * as Style from "./styles";
import Input from "../Input";
import { AiOutlineUser, AiOutlineIdcard } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import Button from "../Button";
import { Api } from "./../../api/api";

const CreateUserForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpf = e.target.cpf.value;

    const payload = {
      name,
      surname,
      email,
      password,
      cpf,
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload,
      true
    );
    const body = await response.json();
    if (response.status === 201) {
      props.history.push("/login");
    }
  };
  return (
    <Style.Container onSubmit={handleSubmit}>
      <div className="input-container">
        <Input text="Name" name="name" id="name" icon={<AiOutlineUser />} />
        <Input
          text="Sobrenome"
          name="surname"
          id="surname"
          icon={<AiOutlineUser />}
        />
        <Input text="CPF" name="cpf" id="cpf" icon={<AiOutlineIdcard />} />
        <Input
          text="Email"
          name="email"
          id="email"
          icon={<MdOutlineAlternateEmail />}
        />
        <Input
          text="Senha"
          name="password"
          id="password"
          type="password"
          icon={<RiLock2Fill />}
        />
      </div>
      <Button text="Cadastrar" green={true} />
    </Style.Container>
  );
};

export default CreateUserForm;
