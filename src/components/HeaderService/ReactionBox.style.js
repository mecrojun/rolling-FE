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
  gap: 10px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 21px;
`;
