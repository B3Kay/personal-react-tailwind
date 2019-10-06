import React from "react";

import { fullConfig } from "../tailwindConfig";
// const gradients = fullConfig.linearGradients.color

const SecondPage = () => {
  const colorTest = [
    { color: "indigo-pink" },
    { color: "indigo-blue" },
    { color: "indigo-purple" }
  ];
  console.log(fullConfig.theme.linearGradients.colors);

  const tailwindGradients = fullConfig.theme.linearGradients.colors;

  return (
    <div
      className={` w-full bg-gray-100`}
      // style={{ height: "100vh" }}
    >
      <div className="container  m-auto ">
        <h2 className="text-gray-800 text-3xl font-bold">Choose a color theme</h2>
        <div className="flex flex-wrap ">
          {/* {colorTest.map(({ color }) => (
          <div
            key={color}
            className={`bg-gradient-br-${color} rounded m-2 w-1/6 h-64 text-center`}
          >
            <h4 className="text-white">{color}</h4>
          </div>
        ))} */}

          {Object.keys(tailwindGradients).map(color => (
            <div key={color} className={` w-1/4 h-64  py-8 px-10`}>
              <div
                className={`bg-gradient-br-${color} rounded  h-full text-center  text-center flex shadow-lg`}
              >
                <h4 className="text-white m-auto text-xl font uppercase tracking-wide">
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
