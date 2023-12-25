import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --gradient: linear-gradient(
            to right, 
            #029F6F 0%,
            #45789E 35%, 
            #E5DF41 70%,
            #029F6F 90%
        );
        --green100:#F6FFF9;
        --green200:#70E599;
        --green300:#46CC75;
        --green400:#20B956;
        --green500:#009C37;
        --green600:#02812F;
        --green700:#015A20;
        --green800:#003513;
        --green900:#001B09;

        --red100:#F9EDEC;
        --red200:#E2BFBE;
        --red300:#BF7E7C;
        --red400:#A14C49;
        --red500:#79312F;
        --red600:#471918;
        --red700:#280909;
        --red800:#003513;
        --red900:#001B09;

        --gray100:#FCFCFC;
        --gray200:#E0E0E0;
        --gray300:#C4C4C4;
        --gray400:#A8A8A8;
        --gray500:#8C8C8C;
        --gray600:#707070;
        --gray700:#545454;
        --gray800:#383838;
        --gray900:#1C1C1C;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles;