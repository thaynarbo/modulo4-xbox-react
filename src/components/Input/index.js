import React from "react";
import * as Style from "./style";
const Input = ({ text, icon, ...props }) => {
  return (
    <Style.Container>
      <Style.ContainerInput
        {...props}
        icon={icon}
        placeholder={text}
      ></Style.ContainerInput>
      {icon && icon}
    </Style.Container>
  );
};

export default Input;
