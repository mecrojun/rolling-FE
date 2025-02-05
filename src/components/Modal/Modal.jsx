import * as M from "./Modal.style";

function Modal({ message, handleClose }) {
  const {
    id,
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt,
  } = message;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  return (
    <M.Container>
      <M.Header>
        <M.ProfileWrapper>
          <M.ProfileImage $image={profileImageURL} />
          <M.TitleWrapper>
            <M.Title>
              From. <M.Name>{sender}</M.Name>
            </M.Title>
            <M.Badge $relationship={relationship}>{relationship}</M.Badge>
          </M.TitleWrapper>
        </M.ProfileWrapper>
        <M.Date>{formatDate(createdAt)}</M.Date>
      </M.Header>
      <M.Content $font={font}>{content}</M.Content>
      <M.Button onClick={handleClose}>확인</M.Button>
    </M.Container>
  );
}

export default Modal;
