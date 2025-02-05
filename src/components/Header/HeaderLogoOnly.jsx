import { Link } from "react-router-dom";
import * as H from "./Header.style";
import Logo from "./Logo";

function HeaderLogoOnly() {
  return (
    <H.HeaderBox>
      <H.StyledHeader>
        <H.StyledLink as={Link} to="/">
          <Logo />
        </H.StyledLink>
      </H.StyledHeader>
    </H.HeaderBox>
  );
}

export default HeaderLogoOnly;
