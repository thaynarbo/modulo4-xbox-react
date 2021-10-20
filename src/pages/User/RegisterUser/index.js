import React from "react";
import * as Style from "./styles";
import CreateUserForm from "../../../components/CreateUserForm";
const RegisterUser = (props) => {
  return (
    <Style.Container>
      <CreateUserForm {...props} />
    </Style.Container>
  );
};

export default RegisterUser;
