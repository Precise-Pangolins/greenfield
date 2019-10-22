import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";

const App = () => {
  console.log(state.getState());
  return (
    <div>
      <Overview />
    </div>
  );
};

export default App;
