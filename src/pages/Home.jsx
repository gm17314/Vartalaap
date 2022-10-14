import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../component/Common";
import Sidebar from "../component/Sidebar";
import Chatarea from "../component/Chatarea";
import Hamburger from "../component/Hamburger";
import { mobile } from "../component/Responsive";
import { smallMobile } from "../component/Responsive";

const Home = () => {
  const [open, setOpen] = useState(true);

  const Home = styled(Flex)`
    height: 100vh;
  `;
  const UserInterface = styled(Flex)`
    width: 78%;
    height: 83vh;
    overflow: hidden;
    position: relative;
    justify-content: flex-start;
    backdrop-filter: blur(12px) saturate(185%);
    -webkit-backdrop-filter: blur(12px) saturate(185%);
    background-color: rgba(255, 255, 255, 0.28);
    border-radius: 12px;
    ${mobile({
      height: "80vh",
      width: "100%",
      borderRadius:"0"
    })}
    ${smallMobile({
      height: "100vh",
      width: "100%",
      borderRadius:"0"
    })}
  `;

  return (
    <Home>
      <UserInterface>
        <Hamburger
          function={() => {
            setOpen(!open);
          }}
        />
        <Sidebar class={open ? "active" : ""} />
        <Chatarea class={open ? "not-active" : ""} />
      </UserInterface>
    </Home>
  );
};

export default Home;
