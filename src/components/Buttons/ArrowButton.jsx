import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

const ArrowButtonWrapper = styled.button`
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

const returnArrowImg = (direction) => {
    if(direction === 'left')
        return <ArrowLeftIcon size="16px"/>;
    if(direction === 'right')
        return <ArrowRightIcon size="16px"/>;
}

function ArrowButton({ direction }) {

    return (
      <ArrowButtonWrapper>
        {returnArrowImg(direction)}
      </ArrowButtonWrapper>
    );
  }
  
export default ArrowButton;