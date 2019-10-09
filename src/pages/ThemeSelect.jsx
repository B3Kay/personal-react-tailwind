// /** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import {useSpring, animated} from 'react-spring'
import { GradientContext } from "../ThemContext";

import { fullConfig } from "../tailwindConfig";


const tailwindGradients = fullConfig.theme.linearGradients.colors;


const getRandomGradient = () => {
  const arrayGradients = Object.keys(tailwindGradients);
  const randomNumber = Math.round(Math.random() * arrayGradients.length - 1);
  console.log(arrayGradients[randomNumber]);
  return arrayGradients[randomNumber];
}




const ThemeSelect = ({ togglePortal }) => {
  const [theme, setTheme] = useState("indigo-pink");

  const isActive = () => {

    return false;
  }

  return (
    <GradientContext.Consumer>
      {({ gradient, setGradient }) => (
        <div
          className={` w-full bg-gray-100`}
        // style={{ height: "100vh" }}
        >
          <div className="container  m-auto pt-16">
            <div css={css`
                display: grid;
                grid-template-columns: 1fr auto;
              `}>
              <div>

                <h2 className={`text-gray-800 text-3xl font-bold  pb-3}`}>
                  Choose a color theme
              </h2>
                <h3 className="pb-10">
                  <span
                    className={`bg-gradient-br-${gradient} text-white px-2 py-1 rounded `}
                  >
                    {gradient}
                  </span>{" "}
                  is Current theme
              </h3>
                <p>{gradient}</p>
              </div>
              <div>
                <div
                  onClick={() => togglePortal(false)}
                  className="cursor-pointer inline-block text-sm px-4 py-2 leading-none border border-black rounded  hover:border-teal hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Close
                  </div>
                <div
                  onClick={() => setGradient(getRandomGradient())}
                  className={`
                    cursor-pointer 
                    inline-block 
                    text-sm px-4 py-2 
                    leading-none 
                    rounded
                    bg-gradient-br-${getRandomGradient()}

                    hover:border-teal 
                    hover:text-teal-500 
                    hover:bg-white

                    mt-4 lg:mt-0`}>
                  Randomize
                  </div>
              </div>
            </div>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
                grid-gap: 3rem;
                grid-auto-rows: 20rem;
              `}
            >
              {Object.keys(tailwindGradients).map(color => (
                <animated.div key={color}>
                  <div
                    className={`bg-gradient-br-${color} rounded  h-full text-center  text-center flex shadow-lg hover:shadow-xl`}
                    css={css`
                      transition: transform 0.3s, box-shadow 0.3s;
                      &:hover {
                        transform: translate(0.1rem, -0.5rem);
                      }
                    `}
                    onClick={() => setGradient(color)}
                  ><div
                    className={`m-auto flex  ${(gradient === color) ? "bg-gray-300" : null}`}
                    css={css`
                      height: 100%;
                      width: 100%;
                    `}
                    >

                      <h4 className="text-black text-xl font uppercase tracking-wide">
                        {color}
                      </h4>
                      <svg
                        viewBox="0 0 20 20"
                        height="50px"
                        width="50px"
                        background="blue"
                        strokeWidth="2"
                      >
                        <polyline 
                          points="0,10 7,20  20,0" 
                          fill="none" 
                          stroke="black" 
                          strokeDasharray="20,20"
                          strokeDashoffset="1px"
                        />
                      </svg>
                    </div>
                  </div>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </GradientContext.Consumer>
  );
};

export default ThemeSelect;
