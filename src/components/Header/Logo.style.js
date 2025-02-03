import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  height: 42px;
  gap: 8px;
`;

export const LogoImage = styled.img`
  height: auto;
`;

export const LogoText = styled.p`
  ${({ theme }) => theme.fonts["20b"]};
  color: ${({ theme }) => theme.colors.black};
`;
