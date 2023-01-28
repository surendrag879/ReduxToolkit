import React from "react";
import "./App.css";

import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <div className="counterApp">
        <h1>Counter App</h1>
        <Counter />
      </div>
      <div className="todoApp">
      </div>
    </>
  );
}

export default App;
