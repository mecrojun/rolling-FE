import styled from "styled-components";

const DeleteButtonWrap = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding: 6px;  
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    ${(props) => props.disable ?
      `background-color: #CCCCCC;` :
      `background-color: #FFFFFF;
    
      &:hover {
          cursor: pointer;
          background-color: #F6F6F6;
      }

      &:focus {
          border: 1px solid #555555;
          background-color: #FFFFFF;
      }`
    }
`;

const DeleteButtonImg = styled.div`
    width: 24px;
    height: 24px;
    background-image: url("${({ disable }) => disable ? `/src/assets/icons/trashcan_white_icon.svg` :`/src/assets/icons/trashcan_icon.svg`}");
    background-size: cover;
`;

function DeleteButton({ disable }) {
    return (
      <DeleteButtonWrap disable={disable}>
        <DeleteButtonImg disable={disable}></DeleteButtonImg>
      </DeleteButtonWrap>
    );
  }
  
  export default DeleteButton;