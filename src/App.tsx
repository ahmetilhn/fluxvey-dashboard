import React from "react";
import RouteLayer from "./router";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import { useCommonStore } from "./store";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { isLoading } = useCommonStore((store) => store);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Toaster />
        {isLoading && <Loader />}
        <RouteLayer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
