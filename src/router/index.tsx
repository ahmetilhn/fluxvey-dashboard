import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Surveys from "../pages/Surveys";
import NewSurvey from "../pages/Surveys/New";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import SurveyDetail from "../pages/Surveys/Detail";
import EditSurvey from "../pages/Surveys/Edit";

const RouteLayer = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Surveys />} path="/surveys" />
        <Route element={<NewSurvey />} path="/surveys/new" />
        <Route element={<SurveyDetail />} path="/surveys/:surveyId" />
        <Route element={<EditSurvey />} path="/surveys/edit/:surveyId" />
      </Route>
      <Route element={<AuthLayout />}>
        <Route element={<Login />} path="/login" />
      </Route>
    </Routes>
  );
};

export default RouteLayer;
