import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as L from "./ListPageStyle";
import Header from "../components/Header/Header";
import ListCard from "../components/Card/ListCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ArrowButton from "../components/Buttons/ArrowButton";

const dummyCard = [
  {
    id: 1,
    name: "Sowon",
    backgroundColor: "purple",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 35,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2025-02-02T15:46:45.077667",
  },

  {
    id: 2,
    name: "Jisoo",
    backgroundColor: "beige",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 39,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-08-30T15:46:45.077667",
  },

  {
    id: 3,
    name: "Nayeon",
    backgroundColor: "green",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 30,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-09-22T15:46:45.077667",
  },

  {
    id: 4,
    name: "Jihoon",
    backgroundColor: "blue",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 25,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-04-17T15:46:45.077667",
  },

  {
    id: 5,
    name: "Kim",
    backgroundColor: "blue",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 37,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2025-02-08T15:46:45.077667",
  },

  {
    id: 6,
    name: "Somi",
    backgroundColor: "beige",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 32,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-09-25T15:46:45.077667",
  },

  {
    id: 7,
    name: "Yeongseo",
    backgroundColor: "blue",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 17,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-02-09T15:46:45.077667",
  },

  {
    id: 8,
    name: "Yeonsu",
    backgroundColor: "green",
    backgroundImageURL: null,
    messageCount: 30,
    reactionCount: 38,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
    createdAt: "2024-09-06T15:46:45.077667",
  },
];

function getPopularCards(cards) {
  return [...cards].sort((a, b) => b.reactionCount - a.reactionCount);
}

function getRecentCards(cards) {
  return [...cards].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

function List() {
  const navigate = useNavigate();
  function handleCreatePost() {
    navigate("/Post");
  }

  const [isloading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(dummyCard);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/15-5/recipients/"
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

  const PopularCards = getPopularCards(cards);
  const RecentCards = getRecentCards(cards);

  function handlePrev(type) {
    if (type === "popular" && popularIndex > 0) {
      setPopularIndex(popularIndex - cardsPerPage);
    } else if (type === "recent" && recentIndex > 0) {
      setRecentIndex(recentIndex - cardsPerPage);
    }
  }

  function handleNext(type) {
    if (
      type === "popular" &&
      popularIndex + cardsPerPage < PopularCards.length
    ) {
      setPopularIndex(popularIndex + cardsPerPage);
    } else if (
      type === "recent" &&
      recentIndex + cardsPerPage < RecentCards.length
    ) {
      setRecentIndex(recentIndex + cardsPerPage);
    }
  }

  const visiblePopularCards = PopularCards.slice(
    popularIndex,
    popularIndex + cardsPerPage
  );
  const visibleRecentCards = RecentCards.slice(
    recentIndex,
    recentIndex + cardsPerPage
  );

  if (isloading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <L.ListTitleText>인기 롤링 페이퍼🔥</L.ListTitleText>
      <L.CardSlider>
        <L.CardContainer>
          {PopularCards.length > cardsPerPage && popularIndex > 0 && (
            <L.ArrowButtonWrapper className="left">
              <ArrowButton
                direction="left"
                onClick={() => handlePrev("popular")}
              />
            </L.ArrowButtonWrapper>
          )}

          <ListCard cards={visiblePopularCards} />

          {PopularCards.length > cardsPerPage &&
            popularIndex + cardsPerPage < PopularCards.length && (
              <L.ArrowButtonWrapper className="right">
                <ArrowButton
                  direction="right"
                  onClick={() => handleNext("popular")}
                />
              </L.ArrowButtonWrapper>
            )}
        </L.CardContainer>
      </L.CardSlider>

      <L.ListTitleText>최근에 만든 롤링 페이퍼⭐</L.ListTitleText>
      <L.CardSlider>
        <L.CardContainer>
          {recentIndex > 0 && (
            <L.ArrowButtonWrapper className="left">
              <ArrowButton
                direction="left"
                onClick={() => handlePrev("recent")}
              />
            </L.ArrowButtonWrapper>
          )}

          <ListCard cards={visibleRecentCards} />

          {recentIndex + cardsPerPage < RecentCards.length && (
            <L.ArrowButtonWrapper className="right">
              <ArrowButton
                direction="right"
                onClick={() => handleNext("recent")}
              />
            </L.ArrowButtonWrapper>
          )}
        </L.CardContainer>
      </L.CardSlider>
      <L.PostButtonWrapper>
        <PrimaryButton onClick={handleCreatePost}>
          나도 만들어보기
        </PrimaryButton>
      </L.PostButtonWrapper>
    </div>
  );
}

export default List;
