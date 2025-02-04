import {
  ProfileImagesContainer,
  ProfileImage,
  PlusNumber,
  Count,
  Num,
} from "./ProfileImages.style";

function ProfileImages({ recentMessages, messageCount }) {
  return (
    <>
      <ProfileImagesContainer>
        {recentMessages.map((message, index) => (
          <ProfileImage
            key={message.id}
            src={message.profileImageURL}
            alt={`profiles${index + 1}`}
          />
        ))}
        {messageCount >= 4 && <PlusNumber>+{messageCount - 3}</PlusNumber>}
      </ProfileImagesContainer>
      <Count>
        <Num>{messageCount}</Num>명이 작성했어요!
      </Count>
    </>
  );
}

export default ProfileImages;
