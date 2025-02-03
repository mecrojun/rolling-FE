import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

const ArrowButtonWrap = styled.button`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 50%;
    opacity : 0.9;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const ArrowImg = (direction) => {
    if(direction === 'left')
        return <ArrowLeftIcon size="16px"/>;
    if(direction === 'right')
        return <ArrowRightIcon size="16px"/>;
}

function ArrowButton({ direction }) {
    console.log(direction);

    return (
      <ArrowButtonWrap>
        {ArrowImg(direction)}
      </ArrowButtonWrap>
    );
  }
  
export default ArrowButton;