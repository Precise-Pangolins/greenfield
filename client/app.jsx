import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";
import QABody from "./components/qanda-components/QABody.jsx";



const App = () => {
  console.log(state.getState());
  return (
    <div>
      <Overview />
      <QABody />
    </div>
  );
};

export default App;
