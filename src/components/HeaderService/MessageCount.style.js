import styled from "styled-components";

export const Count = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fonts["18r"].fontSize};
  font-weight: ${({ theme }) => theme.fonts["18r"].fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Num = styled.p`
  font-weight: ${({ theme }) => theme.fonts["18b"].fontWeight};
`;
