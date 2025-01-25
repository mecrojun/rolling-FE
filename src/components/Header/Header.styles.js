import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: gray;
  padding: 11px 24px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin: 0 auto;
  align-items: center;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
