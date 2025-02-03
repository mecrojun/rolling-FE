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

const SenderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  ${(props) => props.theme.fonts["20b"]}
  color: #000000;
`;

const MessageFont = styled.p`
  ${(props) => props.theme.fonts["18r"]}
  color: #4A4A4A;
  letter-spacing: -1%;
`;

const MessageDateFont = styled.p`
  ${(props) => props.theme.fonts["12r"]}
  color: #999999;
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
          <SenderFont>From. {sender}</SenderFont>
          <RelationshipBadge>{relationship}</RelationshipBadge>
        </div>
      </SenderContainer>
      <MessageFont>{content}</MessageFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
