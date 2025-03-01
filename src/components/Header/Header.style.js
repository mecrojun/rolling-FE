import { Link } from "react-router-dom";
import styled from "styled-components";

/* Header */
export const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  height: 66px;

  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledHeader = styled.header`
  display: flex;

  z-index: 10;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  padding: 11px 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

/* HeaderButton */
export const StyledButton = styled.button`
  height: 42px;
  margin-right: 24px;
  padding: 8px 16px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;

  white-space: nowrap;

  cursor: pointer;
  overflow: hidden;
`;

/* Logo */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 42px;
  margin-left: 24px;

  overflow: hidden;
`;

export const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts["20b"]};
`;
