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
