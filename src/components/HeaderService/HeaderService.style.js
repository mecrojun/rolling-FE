import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px; /* 최대 너비 고정 */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0; /* 기본 좌우 여백 */

  @media (max-width: 1248px) {
    padding: 16px 0; /* 화면이 1248px보다 작아지면 좌우 여백 24px로 고정 */
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;
