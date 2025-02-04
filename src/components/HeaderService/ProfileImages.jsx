import {
  ProfileImagesContainer,
  ProfileImageBox,
  ProfileImage,
  PlusNumber,
  Count,
  Num,
} from "./ProfileImages.style";

function ProfileImages({ recentMessages, messageCount }) {
  return (
    <ProfileImagesContainer>
      <ProfileImageBox>
        {recentMessages.map((message, index) => (
          <ProfileImage
            key={message.id}
            src={message.profileImageURL}
            alt={`profiles${index + 1}`}
          />
        ))}

        {messageCount >= 4 && <PlusNumber>+{messageCount - 3}</PlusNumber>}
      </ProfileImageBox>
      <Count>
        <Num>{messageCount}</Num>명이 작성했어요!
      </Count>
    </ProfileImagesContainer>
  );
}

export default ProfileImages;
