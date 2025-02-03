import { Link } from "react-router-dom";
import * as S from "./Header.style";
import Logo from "./Logo";

function HeaderLogoOnly() {
  return (
    <S.StyledHeader>
      <S.StyledLink as={Link} to="/">
        <Logo />
      </S.StyledLink>
    </S.StyledHeader>
  );
}

export default HeaderLogoOnly;
