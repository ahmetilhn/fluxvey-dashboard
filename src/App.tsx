import React from "react";
import RouteLayer from "./router";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import { useCommonStore } from "./store";
const App = () => {
  const { isLoading } = useCommonStore((store) => store);
  return (
    <React.Fragment>
      <BrowserRouter>
        {isLoading && <Loader />}
        <RouteLayer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
