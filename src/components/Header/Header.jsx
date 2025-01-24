import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "gray",
        padding: "11px 0px",
        top: "0",
        left: "0",
        zIndex: "10",
        margin: "0",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>

      <Link to="/Post">
        <HeaderButton />
      </Link>
    </header>
  );
}

export default Header;
