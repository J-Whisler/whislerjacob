import React from "react";

import background from "../img/background.mp4";

import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <StyledHeader className="container">
      <VideoWrap>
        <video src={background} autoplay="true" loop="true"></video>
      </VideoWrap>

      <HeaderContent>
        <h1>Hello Everyone</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          distinctio ipsum vero voluptate sit modi explicabo, optio recusandae
          placeat eos!
        </p>
        <a href="" className="btn">
          Read More
        </a>
      </HeaderContent>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  .container {
    max-width: 960px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
  }
`;

const VideoWrap = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    min-width: 100%;
    min-height: 100%;
  }
`;

const HeaderContent = styled(motion.div)`
  z-index: 2;
`;

export default Header;
