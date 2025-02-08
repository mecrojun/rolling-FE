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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
`;

const ArrowButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export { ListTitleText, PostButtonWrapper, ArrowButtonWrapper, CardSlider };
