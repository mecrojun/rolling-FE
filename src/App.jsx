import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Colorchip from "./components/Colorchip";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>hello</div>
      <Colorchip />
    </ThemeProvider>
  );
}

export default App;
