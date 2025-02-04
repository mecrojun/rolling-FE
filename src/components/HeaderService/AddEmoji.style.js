import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 36px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: ${({ theme }) => theme.fonts["16r"].fontSize};
  font-weight: ${({ theme }) => theme.fonts["16r"].fontWeight};
  line-height: ${({ theme }) => theme.fonts["16r"].lineHeight};
  text-align: center;
  white-space: nowrap;
`;

export const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 100px;
  z-index: 999;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
