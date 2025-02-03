import styled from "styled-components";

// 스타일을 styled-components로 설정
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileTagContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
`;

function Profile() {
  return <ProfileContainer>아이콘</ProfileContainer>;
}

function ProfileTag() {
  return <ProfileTagContainer></ProfileTagContainer>;
}

export { Profile, ProfileTag };
