import styled from "styled-components";

const ListTitleText = styled.h3`
  ${(props) => props.theme.fonts["24b"]}
  margin: 50px 0 15px 380px;
  color: #000000;
  letter-spacing: -1%;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const CardSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: visible;
`;

export { ListTitleText, PostButtonWrapper, CardSlider };
