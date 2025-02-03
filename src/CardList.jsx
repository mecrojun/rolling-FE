import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 166px 380px auto;
  justify-content: center;
`;

function CardList({ cards }) {
  if (!cards || cards.length === 0) {
    return <p>등록된 카드가 없습니다. 새로운 롤링 페이퍼를 만들어 보세요!</p>;
  }

  return (
    <CardListContainer>
      {cards.map((card, id) => (
        <Card
          key={id}
          name={card.name}
          messageCount={card.messageCount}
          backgroundColor={card.backgroundColor}
          backgroundImageURL={card.backgroundImageURL}
        />
      ))}
    </CardListContainer>
  );
}

export default CardList;
