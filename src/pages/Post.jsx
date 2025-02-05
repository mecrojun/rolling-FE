import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import Colorchip from "../components/Colorchip";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ToggleButton from "../components/Buttons/ToggleButton";

function Post() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <HeaderLogoOnly />
      <div>
        <div>
          {/* 섹션 타이틀 태그 정하기 (/list 민지님) */}
          <h2>To.</h2>
          {/* <InputField /> */}
        </div>
        <div>
          <h2>배경화면 선택</h2>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <ToggleButton width="122px" height="40px" />
          {/* Colorchip 컴포넌트 수정 - 아이콘, 이미지 */}
          <Colorchip />
        </div>
        <PrimaryButton>생성하기</PrimaryButton>
      </div>
    </div>
  );
}

export default Post;
