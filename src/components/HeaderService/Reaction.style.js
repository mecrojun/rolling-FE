import styled from "styled-components";

export const ReactionBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReactionBox = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.54);
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  gap: 2px;
`;

export const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;

export const EmojiMoreWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 230px;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;

  @media (min-width: 1248px) {
    right: calc(50% - 600px + 230px);
  }
`;

export const EmojiList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  div {
    background: ${({ theme }) => theme.colors.gray[400]};
    padding: 8px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.54);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
