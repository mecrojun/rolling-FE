import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import Colorchip from "../components/Colorchip/Colorchip";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ToggleButton from "../components/Buttons/ToggleButton";
import { InputField } from "../components/TextField/TextField";
import * as P from "./Post.style";
import { useState } from "react";

function Post() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <P.Wrapper>
      <HeaderLogoOnly />
      <P.Wrapper className="section-wrap">
        <P.Section className="section to">
          <h3>To.</h3>
          <InputField placeholder="받는 사람 이름을 입력해 주세요" />
        </P.Section>
        <P.Section className="section select-background">
          <P.Wrapper className="txt-box">
            <P.SectionTitle>배경화면을 선택해 주세요.</P.SectionTitle>
            <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          </P.Wrapper>
          <P.StyledToggleButton>
            <ToggleButton
              width="122px"
              height="40px"
              handleToggle={handleToggle}
              $isToggled={isToggled}
            />
          </P.StyledToggleButton>

          {/* Colorchip 컴포넌트 수정 - 아이콘, 이미지 */}
          <Colorchip />
        </P.Section>
        <PrimaryButton width="100%" height="56px">
          생성하기
        </PrimaryButton>
      </P.Wrapper>
    </P.Wrapper>
  );
}

export default Post;
