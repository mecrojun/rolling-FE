import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "65px",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "gray",
        padding: "11px 24px",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "10",
        margin: "0 auto",
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
