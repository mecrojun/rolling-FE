import logo from "./logo.svg";

function Logo() {
  return (
    <div style={{ display: "flex", marginLeft: "24px", height: "42px" }}>
      <img src={logo} alt="로고 이미지" />
      <p>Rolling</p>
    </div>
  );
}

export default Logo;
