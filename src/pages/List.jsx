import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import * as L from "./ListPageStyle";
import Header from "../components/Header/Header";
import ListCard from "../components/Card/ListCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ArrowButton from "../components/Buttons/ArrowButton";

function getPopularCards(cards) {
  return [...cards]
    .sort((a, b) => b.reactionCount - a.reactionCount)
    .slice(0, 4);
}

function getRecentCards(cards) {
  return [...cards]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
}

function handleCreatePost() {
  Navigate("/Post");
}

function List() {
  const [isloading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/1-7/recipients/"
        );
        setCards(response.data.results || []);
      } catch (error) {
        console.error("API 요청 실패:", error);
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
        {popularIndex > 0 && (
          <ArrowButton direction="left" onClick={() => handlePrev("popular")} />
        )}
        <ListCard cards={visiblePopularCards} />
        {popularIndex + cardsPerPage < PopularCards.length && (
          <ArrowButton
            direction="right"
            onClick={() => handleNext("popular")}
          />
        )}
      </L.CardSlider>
      <L.ListTitleText>최근에 만든 롤링 페이퍼⭐</L.ListTitleText>
      <L.CardSlider>
        {recentIndex > 0 && (
          <ArrowButton direction="left" onClick={() => handlePrev("recent")} />
        )}
        <ListCard cards={visibleRecentCards} />
        {recentIndex + cardsPerPage < RecentCards.length && (
          <ArrowButton direction="right" onClick={() => handleNext("recent")} />
        )}
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
