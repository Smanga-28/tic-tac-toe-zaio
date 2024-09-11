import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    background-color:transparent;
    box-sizing: border-box;
    font-family:'poppins',sans-serif;
    ${(props)=> props.theme.media.mobile}{
        font-size:11px;
    };
}

body{
    background-color: ${(props) => props.theme.colors.primary};
}`