import styled from "styled-components";

const ButtonWrap = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border: 0;
    border-radius: 100px;
    ${(props) => props.disable ?
        `background-color: #CCCCCC;` :
        `background-color: #555555;
    
        &:hover {
            cursor: pointer;
            background-color: #4A4A4A;
        }

        &:active {
            background-color: #3A3A3A;
        }

        &:focus {
            background-color: #3A3A3A;
            border: 1px solid #2B2B2B;
        }`
    }
`;

const ButtonImg = styled.div`
    width: 24px;
    height: 24px;
    background-image: url("/src/assets/icons/plus_icon.svg");
    background-size: cover;
`;

function CreateButton({ disable }) {
    return (
        <ButtonWrap disable={disable}>
            <ButtonImg></ButtonImg>
        </ButtonWrap>
    );
  }
  
  export default CreateButton;