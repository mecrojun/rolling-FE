import styled from "styled-components";

export const ToName = styled.span`
  font-size: ${({ theme }) => theme.fonts["28b"].fontSize};
  font-weight: ${({ theme }) => theme.fonts["28b"].fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
  line-height: 42px;
  whitespace: nowrap;
`;
