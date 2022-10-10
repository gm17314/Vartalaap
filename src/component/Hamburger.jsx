import React from 'react'
import styled from 'styled-components'
import {FaAlignRight} from "react-icons/fa";
import { mobile } from "./Responsive";
import { smallMobile } from './Responsive';

const Hamburger = (props) => {
    const Hamb = styled.span`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    z-index:50;
    display: none;
    position: absolute;
    ${mobile({
      display: "inline-block",
      top:"2.7%",
      left:"3%"
    })}
        ${smallMobile({
      top: "3.2%",
    })}

    `

  return (
    <Hamb id="hamburger" onClick={props.function} >
        <FaAlignRight />
      </Hamb>
  )
}

export default Hamburger
