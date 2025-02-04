import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
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
`;

const CardContent = styled.div`
  width: 227px;
  height: 210px;
  margin: 30px 24px auto;
  gap: 43px;
`;

const CardTitle = styled.h3`
  margin-bottom: 15px;
  ${(props) => props.theme.fonts["24b"]}
  color: ${(props) =>
    props.$backgroundImageURL && props.$backgroundImageURL !== ""
      ? "#ffffff"
      : "#181818"};
  letter-spacing: -1%;
`;

const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 28px;
  margin-bottom: 15px;
`;

const ProfileIcon = styled.div`
  position: absolute;
  left: ${(props) => props.$index * 20}px;
  z-index: ${(props) => 10 - props.$index};
  width: 28px;
  height: 28px;
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 1.5px solid white;
`;

const MoreMessagesCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.$index * 20}px;
  z-index: ${(props) => 10 - props.$index};
  width: 33px;
  height: 28px;
  padding: 5px 6px;
  background-color: #ffffff;
  border-radius: 30px;
`;

const MoreMessageText = styled.p`
  ${(props) => props.theme.fonts["12r"]};
  color: #555555;
`;

const ProfileList = ({ recentMessages = [], messageCount = 0 }) => {
  const maxVisibleProfiles = 3;
  const VisibleProfiles = recentMessages.slice(0, maxVisibleProfiles);
  const hiddenMessageCount = messageCount - recentMessages.length;

  return (
    <ProfileContainer>
      {VisibleProfiles.map((message, index) => (
        <ProfileIcon
          key={index}
          $profileImageURL={message.profileImageURL}
          $index={index}
        />
      ))}
      {hiddenMessageCount > 0 && (
        <MoreMessagesCount $index={maxVisibleProfiles}>
          <MoreMessageText>+{hiddenMessageCount}</MoreMessageText>
        </MoreMessagesCount>
      )}
    </ProfileContainer>
  );
};

const CardCountText = styled.p`
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

const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  margin-top: 40px;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const ReactionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 199px;
  padding-top: 17px;
  gap: 8px;
`;

function Card({
  backgroundColor,
  backgroundImageURL,
  name,
  profileImageURL,
  messageCount,
  recentMessages,
  reactionCount,
}) {
  return (
    <CardContainer
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
    >
      <CardContent>
        <CardTitle>To. {name}</CardTitle>
        <ProfileList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <CardCountText>
          <BoldText>{messageCount}</BoldText>명이 작성했어요!
        </CardCountText>
        <ReactionContainer>
          <ReactionIcons>
            {/*가장 많이 리액션된 아이콘 3개와 개수*/}
            <span>👍 20</span>
            <span>😆 12</span>
            <span>🥺 7</span>
          </ReactionIcons>
        </ReactionContainer>
      </CardContent>
    </CardContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 166px 380px auto;
  gap: 20px;
`;

function CardList({ cards }) {
  if (!cards || cards.length === 0) {
    return <p>등록된 카드가 없습니다. 새로운 롤링 페이퍼를 만들어 보세요!</p>;
  }

  return (
    <CardListContainer>
      {cards.map((card, id) => (
        <Card
          key={id}
          name={card.name}
          messageCount={card.messageCount}
          backgroundColor={card.backgroundColor}
          backgroundImageURL={card.backgroundImageURL}
        />
      ))}
    </CardListContainer>
  );
}

export default CardList;
