import logo from "./logo.svg";
import { LogoContainer, LogoText, LogoImage } from "./Logo.styled";

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="로고 이미지" />
      <LogoText>Rolling</LogoText>
    </LogoContainer>
  );
}

export default Logo;
