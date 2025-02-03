import styled from "styled-components";

export const ShareMenuWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 110px;
  transform: translateX(100%);
  background: white;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  z-index: 1000;

  @media (min-width: 1248px) {
    right: calc(50% - 600px + 110px);
  }
`;

export const ShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    background: ${({ theme }) => theme.colors.white};
    border: none;

    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
  }

  button:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
