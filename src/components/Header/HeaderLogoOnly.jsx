import { Link } from "react-router-dom";
import { StyledHeader, StyledLink } from "./Header.style";
import Logo from "./Logo";

function HeaderLogoOnly() {
  return (
    <StyledHeader>
      <StyledLink as={Link} to="/">
        <Logo />
      </StyledLink>
    </StyledHeader>
  );
}

export default HeaderLogoOnly;
