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
