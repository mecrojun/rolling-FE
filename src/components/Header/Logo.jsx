import { LogoContainer, LogoText, LogoImage } from "./Logo.style";

function Logo() {
  return (
    <LogoContainer>
      {/* 이미지 불러오기가 안돼서 임시로 public에 저장 */}
      <LogoImage src="/logo.svg" />
      <LogoText>Rolling</LogoText>
    </LogoContainer>
  );
}

export default Logo;
