import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <React.Fragment>
      <DashboardLayout>
        <RouterProvider router={router} />
      </DashboardLayout>
    </React.Fragment>
  );
}

export default App;
