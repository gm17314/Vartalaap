import { css } from "styled-components";

export const mobile=(props)=>{
    return css`
        @media (max-width:620px){
            ${props}
        }

    `}
export const smallMobile=(props)=>{
    return css`
        @media (max-width:360px){
            ${props}
        }

    `
}
export const MidMobile=(props)=>{
    return css`
        @media (max-width:450px){
            ${props}
        }

    `
}