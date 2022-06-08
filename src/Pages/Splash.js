import React, { useRef } from "react";
import Image from "Images/logoImage.png";
import { useSpring, animated, useChain } from "react-spring";
import Title from "Components/Title";
import { MainLayout } from "Styles/MainLayout";
import styled from "styled-components";
import Skills from "Components/Skills";
import { Helmet } from "react-helmet";

const Splash = () => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const imageRef = useRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);

  const imageStyle = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    ref: imageRef,
  });

  useChain([text1Ref, text2Ref, text3Ref, imageStyle]);
  return (
    <>
      <Helmet>
        <title>My Splash</title>
      </Helmet>
      <MainLayout>
        <SplashStyle>
          <Skills />
          <Title title="Splash" span="Splash" />
          <div>
            <animated.h2 style={text1Style}>Welcome</animated.h2>
            <animated.h2 style={text2Style}>To</animated.h2>
            <animated.h2 style={text3Style}>The</animated.h2>
            <animated.img style={imageStyle} src={Image} />
          </div>
        </SplashStyle>
      </MainLayout>
    </>
  );
};
const SplashStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  background-color: black;
  div {
    width: 100%;
  }
`;
export default Splash;

const useAnimation = (ref) => {
  const spring = useSpring({
    from: { opacity: 0, position: "absolute", transform: "scale(0.2)" },
    to: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.5)" },
    ],
    ref: ref,
  });
  return spring;
};
