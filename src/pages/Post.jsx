import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderService from "../components/HeaderService/HeaderService";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import MessageCard from "../components/MessageCard";
import { MessageCardBox, Box, PlusBox } from "./Post.style";
import { messageData } from "./MessageData";
import CreateButton from "../components/Buttons/CreateButton";

function Post() {
  const { recipientId } = useParams();
  const [messages, setMessages] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          `https://rolling-api.vercel.app/1-7/recipients/9817/
        `
        );

        if (response.data.backgroundColor) {
          setBackgroundColor(response.data.backgroundColor);
        }
      } catch (error) {
        console.error("배경색 조회 오류:", error);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://rolling-api.vercel.app/1-7/recipients/9817/messages/`
        );
        setMessages(response.data.results);
      } catch (error) {
        console.error("메시지 조회 오류:", error);
        setMessages(messageData);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchRecipientData(), fetchMessages()]);
      setIsReady(true);
    };

    fetchData();
  }, [recipientId]);

  if (!isReady) return null;

  return (
    <Box bgColor={backgroundColor}>
      <HeaderLogoOnly />
      <HeaderService />
      <MessageCardBox>
        <PlusBox to="/">
          <CreateButton />
        </PlusBox>
        {messages.map((message, index) => (
          <MessageCard key={index} {...message} />
        ))}
      </MessageCardBox>
    </Box>
  );
}

export default Post;
