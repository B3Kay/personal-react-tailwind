import React from "react";
import TopNav from "../components/TopNav";

const FirstPage = () => {
  return (
    <div className={`bg-gradient-br-indigo-pink w-full `} style={{ height: "100vh" }}>
      <TopNav></TopNav>
      <div className="w-full max-w-screen-xl relative mx-auto px-6 pt-16 pb-40 md:pb-24">
        <dic className="xl:flex -mx-6">
          <div className="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className="text-5xl text-white leading-none tracking-wider">
              Hi
              <br />
              I'm Benjamin,<br></br>
              Front End Developer
            </h1>
            <h5 className="text-2xl text-white font-light">
              UX / UI Developer / Training junky
            </h5>
          </div>
          <div className="mt-12 xl:mt-0 px-6 flex-shrink-0 hidden md:block">
            <h1 className="text-white text-6xl" style={{fontSize: '20rem'}}>B</h1>
          </div>
        </dic>
      </div>
    </div>
  );
};

export default FirstPage;
