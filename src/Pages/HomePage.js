import React, { useCallback } from "react";
import styled from "styled-components";
// import Particles from "react-tsparticles";
import { Facebook, GitHub, Instagram } from "@material-ui/icons";
import { Helmet } from "react-helmet";
const HomePage = () => {
  // const particlesInit = (main) => {
  //   console.log("====================================");
  //   console.log(main);
  //   console.log("====================================");
  // };
  // const particlesLoaded = (container) => {
  //   console.log("====================================");
  //   console.log(container);
  //   console.log("====================================");
  // };

  return (
    <>
      <Helmet>
        <title>Faeze Moradi</title>
      </Helmet>
      <HomePageStyle>
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: { color: "#0e387a" },
            fpsLimit: 60,
            particles: {
              number: {
                value: 400,
                limit: 0,
                density: {
                  enable: true,
                  area: 1080,
                },
              },
              color: {
                value: "#9fafca",
              },
              shape: {
                type: "circle",
                size: {
                  value: 1,
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                },
              },
              opacity: {
                value: 0.5,
                random: {
                  enable: true,
                  minimumValue: 0.05,
                },
                anim: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.05,
                  sync: false,
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
          }}
        /> */}
        <div className="typography">
          <h1>
            Hi i'm <span>Faeze Moradi</span>
          </h1>
          <p>Welcome to my website </p>
          <div className="icons">
            <a
              href="https://facebook.com/faezemoradi8993"
              className="i-facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com/faezemoradi_developer"
              className="i-instagram"
            >
              <Instagram />
            </a>
            <a href="https://github.com/faezemoradi8993" className="i-github">
              <GitHub />
            </a>
          </div>
        </div>
      </HomePageStyle>
    </>
  );
};
const HomePageStyle = styled.header`
  margin: auto;
  padding: 3rem 1rem;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  .typography {
    text-align: center;
    h1 {
      padding-bottom: 2rem;
      font-size: 3rem;
      color: var(--white-color);
      span {
        font-size: 3rem;
        color: var(--primery-color);
      }
    }
  }
  p {
    color: var(--font-light-color);
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      box-shadow: 1px 1px 10px black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      border: 2px solid var(--font-light-color);
      background-color: transparent;
      transition: all 0.3s ease;
      color: var(--primery-color);
    }
    a:not(last-child) {
      margin-right: 1rem;
    }
    .i-instagram {
      &:hover {
        color: #8a3ab9;
      }
    }
    .i-github {
      &:hover {
        color: #fff;
      }
    }
    .i-facebook {
      &:hover {
        color: #3b5998;
      }
    }
  }
`;
export default HomePage;
