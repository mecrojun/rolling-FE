import styled from "styled-components";

// 카드 박스 스타일 정의
const Cardcontainer = styled.div`
  width: 275px;
  height: 260px;
  background: ${(props) =>
    props.$backgroundImageURL
      ? `url(${props.$backgroundImageURL}) no-repeat center/cover`
      : props.$backgroundColor === "purple"
      ? `#ecd9ff url("/assets/card-list/pattern_purple.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "blue"
      ? `#b1e4ff url("/assets/card-list/pattern_blue.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "beige"
      ? `#ffe2ad url("/assets/card-list/pattern_beige.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "green"
      ? `#d0f5c3 url("/assets/card-list/pattern_green.png") no-repeat right bottom/auto`
      : "#ffffff"};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: space-between;
  position: relative; /* 안쪽 도형 상대 위치 지정 */
`;

// 카드 내부 내용 박스
const CardContent = styled.div`
  width: 227px;
  height: 210px;
  margin: 30px 24px auto;
  gap: 43px;
`;

// 카드 수신자(To.이름) 스타일 정의
const CardTitle = styled.h3`
  ${(props) => props.theme.fonts["24b"]}
  color: ${(props) =>
    props.$backgroundImageURL && props.$backgroundImageURL !== ""
      ? "#ffffff"
      : "#181818"};
  letter-spacing: -1%;
  margin-bottom: 15px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  margin-bottom: 15px;
`;

// 프로필 아이콘(임시)
const ProfileIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid white;
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  position: absolute;
  left: ${(props) => props.$index * 20}px;
  z-index: ${(props) => 10 - props.$index}; /* 오른쪽 프로필이 앞에 오도록 */
`;

// 카드 개수 텍스트 스타일 정의
const CardCount = styled.p`
  ${(props) => props.theme.fonts["16r"]}
  color: ${(props) =>
    props.backgroundImageURL && props.backgroundImageURL !== ""
      ? "#ffffff"
      : "#3A3A3A"};
  letter-spacing: -1%;
`;

const BoldText = styled.span`
  ${(props) => props.theme.fonts["16b"]}
`;

// 리액션 박스 스타일 정의
const CardReaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 40px;
`;
const ReactionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 199px;
  padding-top: 17px;
  gap: 8px;
`;

// list 페이지에서 사용될 카드 목록 함수
function Card({
  backgroundColor,
  backgroundImageURL,
  name,
  profileImageURL,
  messageCount,
  reactionCount,
}) {
  return (
    <Cardcontainer
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
    >
      <CardContent>
        <CardTitle>To. {name}</CardTitle>
        <ProfileContainer>
          <ProfileIcon />
          {/*최근 작성자 프로필 아이콘 3개 + 제외한 작성자 프로필 개수*/}
        </ProfileContainer>
        <CardCount>
          <BoldText>{messageCount}</BoldText>명이 작성했어요!
        </CardCount>
        <CardReaction>
          <ReactionIcons>
            {/*가장 많이 리액션된 아이콘 3개와 개수*/}
            <span>👍 20</span>
            <span>😆 12</span>
            <span>🥺 7</span>
          </ReactionIcons>
        </CardReaction>
      </CardContent>
    </Cardcontainer>
  );
}

export default Card;
