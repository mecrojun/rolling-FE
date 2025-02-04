import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  position: fixed;
  top: 65px;
  height: 68px;
  z-index: 10;
  background-color: white;
  padding: 0;
`;
export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  position: fixed;

  left: 50%;
  height: 68px;
  justify-content: space-between;
  transform: translateX(-50%);
  align-items: center;
  padding: 13px 0;
  z-index: 100;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 28px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const MiniSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 13px;
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;
