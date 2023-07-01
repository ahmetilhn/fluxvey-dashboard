import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Surveys from "../pages/Surveys";
import NewSurvey from "../pages/Surveys/New";

const RouteLayer = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Surveys />} path="/surveys" />
      <Route element={<NewSurvey />} path="/surveys/new" />
    </Routes>
  );
};

export default RouteLayer;
