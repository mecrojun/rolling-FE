import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;

  height: 42px;
  margin-left: 24px;

  overflow: hidden;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  height: auto;
`;

export const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts["20b"]};
`;
