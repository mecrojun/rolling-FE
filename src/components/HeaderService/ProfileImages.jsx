import {
  ProfileImagesContainer,
  ProfileImage,
  PlusNumber,
} from "./ProfileImages.style";

function ProfileImages({ profileCount }) {
  return (
    <ProfileImagesContainer>
      {/*임시 프로필 이미지들 */}
      <ProfileImage
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="profile1"
      />
      <ProfileImage
        src="https://randomuser.me/api/portraits/women/1.jpg"
        alt="profile2"
      />
      <ProfileImage
        src="https://randomuser.me/api/portraits/men/2.jpg"
        alt="profile3"
      />

      <PlusNumber>+{profileCount}</PlusNumber>
    </ProfileImagesContainer>
  );
}

export default ProfileImages;
