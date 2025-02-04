import To from "./To";
import Reaction from "./ReactionBox";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import {
  HeaderContainer,
  Line,
  Section,
  LeftSection,
} from "./HeaderService.style";
import { useState } from "react";
import { mockRecipient } from "./MockData";

function HeaderService() {
  const [recipient, setRecipient] = useState(mockRecipient);

  return (
    <HeaderContainer>
      <LeftSection>
        <To name={recipient.name} />
        <Section>
          <ProfileImages
            recentMessages={recipient.recentMessages}
            messageCount={recipient.messageCount}
          />
        </Section>
      </LeftSection>

      <Section>
        <Line />
        <Reaction topReactions={recipient.topReactions} />
        <AddEmoji />
        <Line />
        <ShareButton />
      </Section>
    </HeaderContainer>
  );
}

export default HeaderService;
