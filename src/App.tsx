import React from "react";
import RouteLayer from "./router";
import DashboardLayout from "./layouts/DashboardLayout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <DashboardLayout>
          <RouteLayer />
        </DashboardLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
