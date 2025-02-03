import styled from "styled-components";

export const ShareButtonWrapper = styled.button`
  width: 56px;
  height: 36px;
  cursor: pointer;
  padding: 6px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  position: relative;
`;
