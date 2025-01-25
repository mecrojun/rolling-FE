import styled from "styled-components";

// Container를 화면비가 다르더라도 항상 중앙에 위치하게 하려면??
// Justify Content 수정
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 600px;
  height: 476px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px 0px #00000014;

  padding: 40px;
`;

export const Header = styled.div`
  width: 100%;
  height: 116px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #bbbbbb;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
`;

// TODO: 폰트 테마 적용
export const Title = styled.div``;

// TODO: 폰트 테마 적용
export const Name = styled.span``;

export const Badge = styled.div``;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 100px;
  outline: 1px solid #eeeeee;
`;

// TODO: 테마 폰트 적용하기. 사용자가 폰트를 지정할 수 있으니, 고려해서 변경.
export const DateContainer = styled.div``;

// TODO: 테마 폰트 적용하기
export const Content = styled.div`
  width: 100%;
  height: 256px;
  overflow-y: scroll;

  margin-top: 16px;
`;

// TODO:  버튼 컴포넌트 구현되면 수정하기
export const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #9935ff;
  border: 0px;
  border-radius: 6px;
  padding: 7px 16px;
  margin-top: 24px;
  cursor: pointer;
`;
