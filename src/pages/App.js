import React, { useState } from "react";

import FirstPage from "./First";
import SecondPage from "./Second";

import {GradientContext} from '../ThemContext';


function App() {
  // const themeToggle = useTheme();
  const [context, setContext] = useState("blue-pink");

  return (
    <>
      <GradientContext.Provider
        value={{ gradient: context, setGradient: setContext }}
      >
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
      </GradientContext.Provider>
    </>
  );
}

export default App;
