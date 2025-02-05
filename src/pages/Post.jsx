import HeaderService from "../components/HeaderService/HeaderService";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";

function Post() {
  return (
    <div>
      <HeaderLogoOnly />
      <HeaderService />
      <div style={{ paddingTop: "133px" }}>
        <h1>Post 테스트</h1>
        <p>Post</p>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
        <div style={{ height: "200px" }}>안녕</div>
      </div>
    </div>
  );
}

export default Post;
