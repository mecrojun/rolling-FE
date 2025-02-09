import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./routes/Router";
import ToastProvider from "./context/ToastContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        <Router />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
