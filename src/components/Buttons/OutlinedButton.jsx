import styled from "styled-components";

const outLineButtonFontStyle = (height, emoji, theme) => {
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

const OutlinedButtonWrap = styled.button`
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
    ${(props) => outLineButtonFontStyle(props.height, props.emoji, props.theme)}    
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

const inactiveEmoji = `
    width: 0;
    height: 0;
`;

const activeEmoji = (height, disable) => {
    if(height == "56px")
        return inactiveEmoji;

    else if(height == "28px")
        return `width: 20px;
                height: 20px;
                background-image: url("${ disable? "/src/assets/icons/add_emoji_white.svg" : "/src/assets/icons/add_emoji.svg" }");
                background-size: cover;`;
    
    else
        return `width: 24px;
                height: 24px;
                background-image: url("${ disable? "/src/assets/icons/add_emoji_white.svg" : "/src/assets/icons/add_emoji.svg" }");
                background-size: cover;`;
}

const Emoji = styled.div`
    ${(props) => props.emoji ? activeEmoji(props.height, props.disable) : inactiveEmoji }
`;

const OutlinedButtonText = styled.div``;

function OutlinedButton({ width, height, emoji, disable, children }) {

    return (
        <OutlinedButtonWrap width={width} height={height} emoji={emoji} disable={disable}>
            <Emoji height={height} emoji={emoji} disable={disable} />
            <OutlinedButtonText>{children}</OutlinedButtonText>
        </OutlinedButtonWrap>
    );
  }
  
  export default OutlinedButton;