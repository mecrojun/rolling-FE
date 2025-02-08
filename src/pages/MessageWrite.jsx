import PrimaryButton from "../components/Buttons/PrimaryButton";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import { Dropdown, InputField } from "../components/TextField/TextField";
import { Profile } from "../components/Profile/Profile";
import TextEditor from "../components/TextField/TextEditor";
import * as P from "./PostAndMessage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MessageWrite() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const optionData = [
    { key: 1, value: "1번" },
    { key: 2, value: "2번" },
    { key: 3, value: "3번" },
    { key: 4, value: "4번" },
  ];

  const profiles = Array(10).fill(null);

  const isButtonDisabled = !(name.trim() && content.trim());

  const handleSubmit = () => {
    if (!isButtonDisabled) {
      const id = Math.random().toString(36).substr(2, 9);
      navigate(`/post/${id}`);
    }
  };

  return (
    <P.Wrapper>
      <HeaderLogoOnly />
      <P.Wrapper className="section-wrap">
        <P.Section className="name">
          <P.SectionTitle>From.</P.SectionTitle>
          <InputField
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={(value) => setName(value)}
          />
        </P.Section>
        <P.Section className="profile">
          <P.SectionTitle>프로필 이미지</P.SectionTitle>
          <P.Wrapper className="profile-wrap">
            <Profile />
            <P.Wrapper className="profile-select-wrap">
              <p>프로필 이미지를 선택해주세요!</p>
              <P.Wrapper className="profile-list-wrap">
                {profiles.map((_, index) => (
                  <P.ProfileList key={index} />
                ))}
              </P.Wrapper>
            </P.Wrapper>
          </P.Wrapper>
        </P.Section>
        <P.Section className="section">
          <P.SectionTitle>상대와의 관계</P.SectionTitle>
          <Dropdown width="320px" optionData={optionData} />
        </P.Section>
        <P.Section className="">
          <P.SectionTitle>내용을 입력해 주세요</P.SectionTitle>
          <TextEditor content={content} setContent={setContent} />
        </P.Section>
        <P.Section className="select-font">
          <P.SectionTitle>폰트 선택</P.SectionTitle>
          <Dropdown width="320px" />
        </P.Section>
        <PrimaryButton
          width="100%"
          $disable={isButtonDisabled}
          onClick={handleSubmit}
        >
          생성하기
        </PrimaryButton>
      </P.Wrapper>
    </P.Wrapper>
  );
}

export default MessageWrite;
