import styled from "styled-components";

export const StyledButton = styled.button`
  margin-right: 24px;
  padding: 8px 16px;
  height: 42px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;
