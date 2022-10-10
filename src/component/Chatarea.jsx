import React from "react";
import styled from "styled-components";
import Textarea from "./Textarea";
import Head from "./Head";
import Messages from "./Messages";
import { mobile } from "./Responsive";

const Chatarea = (props) => {


  const Chatarea = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(225, 248, 225, 0.925);
    z-index: 1;

    ${mobile({
      position:"absolute",
      width: "100%",
    })}
  `;

  return (
    <Chatarea className={props.class}>
      <Head />
      <Messages />
      <Textarea />
    </Chatarea>
  );
};

export default Chatarea;
