import styled from "styled-components";

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

const ArrowImg = styled.div`
    width: 16px;
    height: 16px;
    background-image: url("${(props) => 
        {
            if(props.direction === 'left')
                return '/src/assets/icons/arrow_left.svg';
            if(props.direction === 'right')
                return '/src/assets/icons/arrow_right.svg';
        }}");
    background-size: cover;
`;

function ArrowButton({ direction }) {
    return (
      <ArrowButtonWrap>
        <ArrowImg direction={direction}></ArrowImg>
      </ArrowButtonWrap>
    );
  }
  
export default ArrowButton;