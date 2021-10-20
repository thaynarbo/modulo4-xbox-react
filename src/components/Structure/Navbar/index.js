import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";

import * as Style from "./styles";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };

    window.addEventListener("onJwtChange", handleOnJwtChange);

    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);
  return (
    <Style.Container>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/11/xbox-logo.png"
          alt=""
        />
      </div>
      <div>
        <ul>
          <li>{isLogged ? <Link to="/home">Início</Link> : undefined}</li>
          <li>
            {isLogged ? (
              <Link to="/registergame">Cadastrar Jogo</Link>
            ) : (
              <Link to="/signup">Criar conta</Link>
            )}
          </li>
          <li>
            {isLogged ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </Style.Container>
  );
};

export default Navbar;
