import styled from "styled-components";

export const ProfileImagesContainer = styled.div`
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
