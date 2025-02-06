import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../components/CardList";
import { ListTitleText } from "../styles/ListPageStyle";

const dummyCard = [
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
    id: 1,
    name: "Sowon",
    backgroundColor: "blue",
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
    id: 1,
    name: "Sowon",
    backgroundColor: "beige",
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
    id: 1,
    name: "Sowon",
    backgroundColor: "green",
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
    id: 1,
    name: "Sowon",
    backgroundColor: "blue",
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
    id: 1,
    name: "Sowon",
    backgroundColor: "beige",
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
    id: 1,
    name: "Sowon",
    backgroundColor: "green",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 39,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
  },
];

function List() {
  const [cards, setCards] = useState([dummyCard]);
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
          setCards(dummyCard);
        } else {
          setCards(response.data.results);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
        setCards(dummyCard);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (isloading) return <p>Loading...</p>;

  return (
    <div style={{ paddingTop: "100px" }}>
      <Header />
      <div>
        <ListTitleText>인기 롤링 페이퍼</ListTitleText>
      </div>
      <CardList cards={cards} />
    </div>
  );
}

export default List;
