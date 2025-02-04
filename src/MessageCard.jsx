import React from "react";
import styled from "styled-components";

//{team}/recipients/{recipient_id}/messages/ *메시지카드 데이터

const MessageCardContainer = styled.div`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: #ffffff;
  overflow: auto;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
`;

const MessageCardContent = styled.div``;

const SenderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 336px;
  padding: 28px 24px;
  gap: 12px;
  border-bottom: 1px solid #eeeeee;
`;

const MessageProfileIcon = styled.div`
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid; white;
  border-color: #EEEEEE;
`;

const SenderFont = styled.h3`
  ${(props) => props.theme.fonts["20r"]}
  color: #000000;
`;

const SenderBoldText = styled.span`
  ${(props) => props.theme.fonts["20b"]}
`;

const RelationshipBadge = styled.div`
  width: 41px;
  height: 20px;
  padding: 8px 0;
  gap: 10px;
  background-color: #f8f0ff;
  border-radius: 4px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 336px;
  height: 106px;
  padding-left: 24px;
`;

const MessageFont = styled.p`
  ${(props) => props.theme.fonts["18r"]}
  color: #4A4A4A;
  letter-spacing: -1%;
`;

const MessageDateFont = styled.p`
  padding-left: 24px;
  padding-bottom: 24px;
  ${(props) => props.theme.fonts["12r"]}
  color: #999999;
  letter-spacing: -0.5%;
`;

function MessageCard({
  recipientId,
  profileImageURL,
  sender,
  relationship,
  content,
  font,
  createdAt,
}) {
  return (
    <MessageCardContainer>
      <SenderContainer>
        <MessageProfileIcon $profileImageURL={profileImageURL} />
        <div>
          <SenderFont>
            From. <SenderBoldText>{sender}</SenderBoldText>
          </SenderFont>
          <RelationshipBadge>{relationship}</RelationshipBadge>
        </div>
      </SenderContainer>
      <MessageContainer>
        <MessageFont>{content}</MessageFont>
      </MessageContainer>
      <MessageDateFont>{createdAt}</MessageDateFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
