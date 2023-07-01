import React from "react";
import RouteLayer from "./router";
import { BrowserRouter } from "react-router-dom";
import useLoader from "./hooks/useLoader";
import Loader from "./components/Loader";
const App = () => {
  const { isLoading } = useLoader();
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
