import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import ArrowButton from "./components/Buttons/ArrowButton";
import CreateButton from "./components/Buttons/CreateButton";
import DeleteButton from "./components/Buttons/DeleteButton";
import ToggleButton from "./components/Buttons/ToggleButton";
import OutlinedButton from "./components/Buttons/OutlinedButton";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
      setIsToggled(!isToggled);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PrimaryButton width="208px" height="56px" $disable={false}>확인</PrimaryButton>
      <SecondaryButton width="122px" height="40px" $disable={false}>취소</SecondaryButton>
      <CreateButton $disable={false}/>
      <DeleteButton $disable={false}/>
      <ToggleButton width="122px" height="40px" handleToggle={handleToggle} $isToggled={isToggled}/>
      <OutlinedButton width="192px" height="40px" $emoji={true} $disable={false}>Enable</OutlinedButton>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
    </ThemeProvider>
  );
}

export default App;
