import styled from "styled-components";

export const Button = styled.button`
  width: 88px;
  padding: 6px 16px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;
`;

export const Text = styled.p`
  text-align: center;
  white-space: nowrap;
`;
