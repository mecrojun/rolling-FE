import styled from "styled-components";

export const ProfileImagesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: -10px; // 이미지 간격을 좁히기 위해 마이너스 마진 사용
`;

export const PlusNumber = styled.div`
  width: 40px;
  height: 40px;
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
