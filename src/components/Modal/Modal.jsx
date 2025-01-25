import {
  Container,
  Header,
  Content,
  Button,
  ProfileWrapper,
  ProfileImage,
  Badge,
  TitleWrapper,
  Title,
  Name,
  DateContainer,
} from "./Modal.style";

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
    <Container>
      <Header>
        <ProfileWrapper>
          <ProfileImage $image={profileImageURL} />
          <TitleWrapper>
            <Title>
              From. <Name>{sender}</Name>
            </Title>
            <Badge $relationship={relationship}>{relationship}</Badge>
          </TitleWrapper>
        </ProfileWrapper>
        <DateContainer>{formatDate(createdAt)}</DateContainer>
      </Header>
      <Content
        style={{
          fontFamily: font.includes(" ") ? `"${font}"` : font,
        }}
      >
        {content}
      </Content>
      <Button onClick={handleClose}>확인</Button>
    </Container>
  );
}

export default Modal;
