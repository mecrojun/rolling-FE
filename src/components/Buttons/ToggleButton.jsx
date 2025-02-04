import { useState } from "react";
import styled from "styled-components";

const ColorButton = styled.button`
    width: ${(props) => props.width || '122px'};
    height: ${(props) => props.height || '40px'};
    border-radius: 6px;
    font-size: 16px;
    line-height: 26px;

    ${(props) => props.toggle ?
        `padding: 8px 16px;
        background-color: #F6F6F6;
        border: 0;
        color: #181818;
        font-weight: 400;` :
        `padding: 7px 16px;
        background-color: #FFFFFF;
        border:2px solid #9935FF;
        color: #861DEE;
        font-weight: 700;`};

    &:hover {
        cursor: pointer;
    }
`;

const ImgButton = styled.button`
    width: ${(props) => props.width || '122px'};
    height: ${(props) => props.height || '40px'};
    border-radius: 6px;
    font-size: 16px;
    line-height: 26px;
    background-color: #CCCCCC;

    ${(props) => props.toggle ?
        `padding: 7px 16px;
        background-color: #FFFFFF;
        border:2px solid #9935FF;
        color: #861DEE;
        font-weight: 700;` :
        `padding: 8px 16px;
        background-color: #F6F6F6;
        border: 0;
        color: #181818;
        font-weight: 400;`};

    &:hover {
        cursor: pointer;
    }
`;

const ToggleButtonWrapper = styled.div`
    display: flex;
`;

function ToggleButton({ width, height }) {

    const [isToggled, setIsToggled] = useState(false);

    const toggleHandle = () => {
        setIsToggled(!isToggled);
    }

    return (
      <ToggleButtonWrapper>
        <ColorButton width={width} height={height} onClick={toggleHandle} toggle={isToggled} >컬러</ColorButton>
        <ImgButton width={width} height={height} onClick={toggleHandle} toggle={isToggled} >이미지</ImgButton>
      </ToggleButtonWrapper>
    );
  }
  
  export default ToggleButton;