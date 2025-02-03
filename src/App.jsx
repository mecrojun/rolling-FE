import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { EmojiBadge, RelBadge } from "./components/Badge";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>hello</div>
      <RelBadge value="지인" />
      <EmojiBadge count={24} />
    </ThemeProvider>
  );
}

export default App;
