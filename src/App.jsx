import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import HeaderService from "./components/HeaderService/HeaderService";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderService />
    </ThemeProvider>
  );
}

export default App;
