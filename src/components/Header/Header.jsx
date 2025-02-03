import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import * as H from "./Header.style";

//각 페이지에서 Header 불러오기
function Header() {
  return (
    <H.StyledHeader>
      <H.StyledLink as={Link} to="/">
        <Logo />
      </H.StyledLink>

      <H.StyledLink as={Link} to="/Post">
        <HeaderButton />
      </H.StyledLink>
    </H.StyledHeader>
  );
}

export default Header;
