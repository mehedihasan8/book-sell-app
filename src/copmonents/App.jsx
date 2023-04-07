import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default App;
