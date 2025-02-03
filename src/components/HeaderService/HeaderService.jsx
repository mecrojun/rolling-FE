import To from "./To";
import MessageCount from "./MessageCount";
import ReactionBox from "./ReactionBox";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import {
  HeaderContainer,
  Line,
  Section,
  LeftSection,
} from "./HeaderService.style";

function HeaderService() {
  return (
    <HeaderContainer>
      <LeftSection>
        <To name="Ashley Kim" />
        <Section>
          <ProfileImages profileCount={6} />
          <MessageCount messageCount={23} />
        </Section>
      </LeftSection>

      <Section>
        <Line />
        <ReactionBox likeCount={24} loveCount={16} partyCount={10} />
        <AddEmoji />
        <Line />
        <ShareButton />
      </Section>
    </HeaderContainer>
  );
}

export default HeaderService;
