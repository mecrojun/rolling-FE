import LogoSVG from "./logo.svg";

import { LogoContainer, LogoText, LogoImage } from "./Logo.style";

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={LogoSVG} />
      <LogoText>Rolling</LogoText>
    </LogoContainer>
  );
}

export default Logo;
