import styled from "styled-components";
import { theme } from "../styles/theme";

export const Wrapper = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    
    &.main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &.header-wrap {
        position: fixed;
        top: 0;
        border: 1px solid #EDEDED;
    }

    &.section-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 0 auto;
        margin-top: 124px;
        border: 1px solid red;
    }

    &.buttonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
    }
`;

export const Content = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};

    &.section {
        display: flex;
        width: 1200px;
        height: 324px;
        border: 1px solid blue;
        border-radius: 16px;
        background-color: #F6F8FF;
        padding-top: 60px;
    }

    &.reverse-section {
        flex-direction: row-reverse;
    }

    &.img {
        width: 720px;
        height: 204px;
        border: 1px solid yellow;
    }
`;

export const Label = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};

    padding: 6px 12px;
    border-radius: 50px;
    background-color: #9935FF;
`;
