import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Header/Hone";
import Post from "./components/Header/Post";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
