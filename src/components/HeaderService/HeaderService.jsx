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
  const [reaction, setReaction] = useState([]);
  // const { id } = useParams();
  const id = "9817";

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          //git  ../13-5/recipients/${recipientId}/
          `https://rolling-api.vercel.app/1-7/recipients/${id}/`
        );
        setRecipient(response.data);
      } catch (error) {
        console.error(" 대상 정보 조회 오류", error);
      }
    };

    const fetchReactionData = async () => {
      try {
        const response = await axios.get(
          //git  ../13-5/recipients/${recipientId}/reactions/
          `https://rolling-api.vercel.app/1-7/recipients/${id}/reactions/`
        );
        setReaction(response.data.results || []);
      } catch (error) {
        console.error("대상 리액션 정보 조회 오류", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchRecipientData(), fetchReactionData()]);
    };

    fetchData();
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
            <Reaction reactions={reaction} />
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
