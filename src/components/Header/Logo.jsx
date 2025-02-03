import * as L from "./Logo.style";

function Logo() {
  return (
    <L.LogoContainer>
      {/* 이미지 불러오기가 안돼서 임시로 public에 저장 */}
      <L.LogoImage src="/logo.svg" />
      <L.LogoText>Rolling</L.LogoText>
    </L.LogoContainer>
  );
}

export default Logo;
