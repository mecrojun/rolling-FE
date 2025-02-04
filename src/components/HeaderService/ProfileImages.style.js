import styled from "styled-components";

export const ProfileImagesContainer = styled.div`
  display: flex;
  gap: 11px;
  justify-content: space-between;
`;
export const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.4px solid white;
  object-fit: cover;
  margin-right: -12px;
`;

export const PlusNumber = styled.div`
  width: 28px;
  height: 28px;

  background-color: #ffffff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #ccc;
  font-size: 12px;
  font-weight: bold;
`;

export const Count = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fonts["18r"].fontSize};
  font-weight: ${({ theme }) => theme.fonts["18r"].fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Num = styled.p`
  font-weight: ${({ theme }) => theme.fonts["18b"].fontWeight};
`;
