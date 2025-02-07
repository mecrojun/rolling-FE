import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "react-router-dom";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import HeaderService from "../components/HeaderService/HeaderService";
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

const GetPopularCards = (cards) => {
  return [...cards]
    .sort((a, b) => b.reactionCount - a.reactionCount)
    .slice(0, 4);
};

const GetRecentCards = (cards) => {
  return [...cards]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
};

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

  const PopularCards = GetPopularCards(cards);
  const RecentCards = GetRecentCards(cards);

  if (isloading) return <p>Loading...</p>;

  return (
    <div style={{ paddingTop: "100px" }}>
      <HeaderLogoOnly />
      <HeaderService />
      <ListTitleText>인기 롤링 페이퍼</ListTitleText>
      <CardList cards={PopularCards} />
      <ListTitleText>최근에 만든 롤링 페이퍼</ListTitleText>
      <CardList cards={RecentCards} />
    </div>
  );
}

// 최근 작성된 4개의 카드를 불러와서 최신순 정렬하는 함수

export default List;
