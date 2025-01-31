import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import { StyledHeader, StyledLink } from "./Header.styles";

function Header() {
  console.log(Header, StyledLink, Logo, HeaderButton);
  return (
    <StyledHeader>
      <StyledLink as={Link} to="/">
        <Logo />
      </StyledLink>

      <StyledLink as={Link} to="/Post">
        <HeaderButton />
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
