import { useState } from "react";
import LoginPage from "./paginas/LoginPage";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./UI";
import { TemaClaro, TemaEscuro } from "./UI/temas";
import SwitcherTema from "./componentes/SwitcherTema";
import { GlobalStyle } from "./componentes/GlobalStyle";

function App() {
  const [tema, setTema] = useState(true);

  const trocarTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? TemaClaro : TemaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={trocarTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
