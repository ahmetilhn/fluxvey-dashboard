import React from "react";
import RouteLayer from "./router";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import { useCommonStore } from "./store";
import { Toaster } from "react-hot-toast";
import toastConfig from "./services/config/toast.config";
const App = () => {
  const { isLoading } = useCommonStore((store) => store);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Toaster toastOptions={toastConfig} />
        {isLoading && <Loader />}
        <RouteLayer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
