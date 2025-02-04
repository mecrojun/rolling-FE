import styled from "styled-components";
import { AddIcon } from "../Icons";
import { theme } from "../../styles/theme";

const outLinedButtonFontStyle = (height, emoji, theme) => {
    let fontStyle;
    
    if(height == "40px") {
        fontStyle = theme.fonts['16r'];

        if(emoji) {
            fontStyle['fontWeight'] = 500;
            fontStyle['lineHeight'] = "24px";
        }
    }
    else if(height == "36px") {
        fontStyle = theme.fonts['16r'];
        fontStyle['fontWeight'] = 500;
        fontStyle['lineHeight'] = "24px";
    }
    else if(height == "28px") {
        fontStyle = theme.fonts['14r'];
    }
    else {
        fontStyle = theme.fonts['18b'];
    }

    return fontStyle;
}

const buttonGap = (height, emoji) => {
    if(emoji) {
        if(height == "56px")
            return `0;`;
        if (height == "40px")
            return `10px;`;
        else
            return `4px;`;
    }
    else
        return `0;`;
}

const OutlinedButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => buttonGap(props.height, props.emoji)}
    width: ${(props) => props.width || '192px'};
    height: ${(props) => props.height || '56px'};
    padding: 14px 16px;
    border: 1px solid #CCCCCC;
    border-radius: 12px;    
    background-color: #FFFFFF;
    color: #181818;
    ${(props) => outLinedButtonFontStyle(props.height, props.emoji, props.theme)}    
    ${(props) => props.disable ?
        `background-color: #CCCCCC;
        color: #FFFFFF;` :
        `background-color: #FFFFFF;

        &:hover {
            cursor: pointer;
            background-color: #F6F6F6;
        }

        &:focus {
            background-color: #FFFFFF;
            border: 1px solid #555555;
        }`
    }
`;

const returnEmoji = (emoji, height, disable) => {
    if(emoji){
        const size = ((height == "28px") ? "20px" : "24px");
        const color = (disable ? theme.colors.white : theme.colors.black);

        if(height == "56px")
            return;
        else
            return <AddIcon size={size} color={color} />;
    }
    else
        return;
}

const OutlinedButtonText = styled.div``;

function OutlinedButton({ width, height, emoji, disable, children }) {

    return (
        <OutlinedButtonWrapper width={width} height={height} emoji={emoji} disable={disable}>
            {returnEmoji(emoji, height, disable)}
            <OutlinedButtonText>{children}</OutlinedButtonText>
        </OutlinedButtonWrapper>
    );
  }
  
  export default OutlinedButton;