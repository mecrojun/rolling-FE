import To from "./To";
import MessageCount from "./MessageCount";
import ReactionBox from "./ReactionBox";
import ShareButton from "./ShareButton";
import { HeaderContainer } from "./HeaderService.style"; // 스타일
import { ProfileImage } from "./ProfileImages.style";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";

function HeaderService() {
  return (
    <HeaderContainer>
      <To name="Ashley Kim" messageCount={23} />
      <ProfileImages />
      <MessageCount messageCount={23} />

      <ReactionBox likeCount={24} heartCount={16} partyCount={10} />
      <AddEmoji />
      <ShareButton />
    </HeaderContainer>
  );
}

export default HeaderService;
