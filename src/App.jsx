import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import DeleteButton from "./components/Buttons/DeleteButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import CreateButton from "./components/Buttons/CreateButton";
import ArrowButton from "./components/Buttons/ArrowButton";
import ToggleButton from "./components/Buttons/ToggleButton";
import OutlinedButton from "./components/Buttons/OutlinedButton";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>hello</div>
      <PrimaryButton>확인</PrimaryButton>
      <SecondaryButton>취소</SecondaryButton>
      <CreateButton />
      <DeleteButton />
      <ToggleButton />
      <OutlinedButton>Enable</OutlinedButton>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
    </ThemeProvider>
  );
}

export default App;
