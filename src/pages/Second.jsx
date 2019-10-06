// /** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, {useState} from "react";

import { fullConfig } from "../tailwindConfig";


const tailwindGradients = fullConfig.theme.linearGradients.colors;

const SecondPage = () => {
  const [theme, setTheme] = useState('indigo-pink');



  return (
    <div
      className={` w-full bg-gray-100`}
      // style={{ height: "100vh" }}
    >
      <div className="container  m-auto ">
        <h2 className="text-gray-800 text-3xl font-bold pt-16 pb-3">
          Choose a color theme
        </h2>
        <h3 className="pb-10"><span className={`bg-gradient-br-${theme} text-white px-2 py-1 rounded `}>{theme}</span> is Current theme</h3>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
            grid-gap: 3rem;
            grid-auto-rows: 20rem;
          `}
        >
          {Object.keys(tailwindGradients).map(color => (
            <div key={color}>
              <div
                className={`bg-gradient-br-${color} rounded  h-full text-center  text-center flex shadow-lg hover:shadow-xl`}
                css={css`
                  transition: transform 0.3s, box-shadow 0.3s;
                  &:hover {
                    transform: translate(0.1rem, -0.5rem);
                  }
                `}
                onClick={() => setTheme(color)}
              >
                <h4 
                  className="text-white m-auto text-xl font uppercase tracking-wide"
                  
                  >
                  {color}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
