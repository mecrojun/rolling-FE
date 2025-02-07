import {
  MessageCardContainer,
  SenderContainer,
  MessageProfileIcon,
  SenderFont,
  SenderBoldText,
  RelationshipBadge,
  MessageContainer,
  MessageFont,
  MessageDateFont,
  DeleteContainer,
} from "./MessageCardStyle";
import DeleteButton from "../Buttons/DeleteButton";

function MessageCard({
  recipientId,
  profileImageURL,
  sender,
  relationship,
  content,
  font,
  createdAt,
  showDeleteButton = false,
  onDelete,
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
        <DeleteContainer>
          {showDeleteButton && (
            <DeleteButton
              $disable={false}
              onClick={() => onDelete(recipientId)}
            />
          )}
        </DeleteContainer>
      </SenderContainer>
      <MessageContainer>
        <MessageFont>{content}</MessageFont>
      </MessageContainer>
      <MessageDateFont>{createdAt}</MessageDateFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
