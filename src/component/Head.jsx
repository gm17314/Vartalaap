import React, { useContext } from "react";
import styled from "styled-components";
import { font1, Flex } from "./Common";
import {
  FaVideoSlash,
  FaUserPlus,
  FaWhmcs,
} from "react-icons/fa";
import { ChatContext } from "../context/ChatContext";
import { mobile } from "./Responsive";
import { smallMobile } from "./Responsive";

const Head = () => {
  
  const { data } = useContext(ChatContext);

  const Head = styled(Flex)`
    width: 100%;
    height: 12%;
    justify-content: space-between;
    background-color: #063858;
    padding: 2rem;
    ${mobile({
      height: "6.5%",
    })}
   ${smallMobile({
      height: "8%",
    })}
  `;

  const Div = styled.div`
    display: none;
    ${mobile({
      display:"inline-block",
    })}
   ${smallMobile({
      display:"inline-block",
    })}
  `

  const Name = styled.span`
    color: #f8faf8;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: ${font1};
    font-variant: small-caps;
    cursor: pointer;
  `;
  const Feature = styled(Flex)`
    width: 15%;
    justify-content: space-around;
    span {
      font-size: 2.2rem;
      color: white;
      cursor: pointer;
    }
  `;

  return (
    <Head >
      <Div/>
      <Name>{data.user?.displayName}</Name>
      <Feature>
        <span>
          <FaVideoSlash />
        </span>
        <span>
          <FaUserPlus />
        </span>
        <span>
          <FaWhmcs />
        </span>
      </Feature>
    </Head>
  );
};
export default Head;
