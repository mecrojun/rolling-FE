import { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import CardList from "./CardList";
import MessageCard from "./MessageCard";

const dummyData = [
  {
    id: 1,
    name: "Sowon",
    backgroundColor: "purple",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 39,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
  },
  {
    id: 2,
    name: "Jisoo",
    backgroundColor: "beige",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 40,
    topReactions: [
      { emoji: "👏", count: 15 },
      { emoji: "😍", count: 15 },
      { emoji: "🤩", count: 20 },
    ],
  },
];

const App = () => {
  const [cards, setCards] = useState([dummyData]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/13-5/recipients/"
        );

        console.log("API 응답 데이터:", response.data);
        // API 응답 데이터가 비어있을 시 더미 데이터를 사용
        if (!response.data.results || response.data.results.length === 0) {
          setCards(dummyData); // 백엔드 데이터가 없을 시 더미 데이터로 대체
        } else {
          setCards(response.data.results);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
        setCards(dummyData); // API 오류 시 더미 데이터 사용
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (isloading) return <p>Loading...</p>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardList cards={cards} />
    </ThemeProvider>
  );
};

export default App;
