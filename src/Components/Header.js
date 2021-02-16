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
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 120px 100px 250px #141414,
      inset -120px -100px 250px #141414;
    opacity: 0.3;
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
  .btn {
    position: relative;
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    border: 1px white solid;
    padding: 1rem;
    top: 2rem;
  }
`;

export default Header;
