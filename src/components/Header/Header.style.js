import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;

  width: 100%;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  padding: 11px 0;

  background-color: ${({ theme }) => theme.colors.white};

  transform: translateX(-50%);
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
