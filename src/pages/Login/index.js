import React from "react";
import * as Style from "./styles";
import Form from "../../components/Form";
const Login = (props) => {
  return (
    <Style.Container>
      <Form {...props} />
    </Style.Container>
  );
};

export default Login;
