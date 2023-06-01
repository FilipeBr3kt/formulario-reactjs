import React from "react";
import ThemeClaro from "../../assets/images/sol.png";
import ThemeEscuro from "../../assets/images/lua.png";
import { Icone } from "../../UI";

const claro = <Icone src={ThemeClaro} alt="tema claro" />;
const escuro = <Icone src={ThemeEscuro} alt="tema escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
