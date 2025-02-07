import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import To from "./To";
import Reaction from "./Reaction";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import * as H from "./HeaderService.style";

function HeaderService() {
  const { recipientId } = useParams();
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          `https://rolling-api.vercel.app/1-7/recipients/9817/`
        );
        setRecipient(response.data);
      } catch (error) {
        console.error(" 대상 정보 조회 오류:", error);
      }
    };

    fetchRecipientData();
  }, [recipientId]);

  if (!recipient) return null;

  return (
    <H.HeaderBox>
      <H.HeaderContainer>
        <To name={recipient.name} />
        <H.RightSection>
          <ProfileImages
            recentMessages={recipient.recentMessages}
            messageCount={recipient.messageCount}
          />
          <H.Line />

          <H.Section>
            <Reaction topReactions={recipient.topReactions} />
            <H.MiniSection>
              <AddEmoji />
              <H.Line />
              <ShareButton />
            </H.MiniSection>
          </H.Section>
        </H.RightSection>
      </H.HeaderContainer>
    </H.HeaderBox>
  );
}

export default HeaderService;
