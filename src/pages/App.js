import React, { useState } from "react";

import FirstPage from "./First";
import ThemeSelect from "./ThemeSelect";

import {GradientContext} from '../ThemContext';


function App() {
  // const themeToggle = useTheme();
  const [context, setContext] = useState("blue-pink");
  
  const [showPortal, togglePortal] = useState(true);

  return (
    <>
      <GradientContext.Provider
        value={{ gradient: context, setGradient: setContext }}
      >
        <FirstPage showPortal={showPortal} togglePortal={togglePortal}></FirstPage>
        {showPortal && <ThemeSelect  togglePortal={togglePortal}></ThemeSelect>}
      </GradientContext.Provider>
    </>
  );
}

export default App;