import { Route, RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Console from "../pages/Console";
import Portfolio from "../pages/Portfolio";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Client from "../pages/Client";
import NoPortfolio from "../pages/NoPortfolio";
import CreateForm from "../pages/CreateForm";
import Forms from "../pages/Forms";
import Form from "../pages/Form";
import Settings2 from "../pages/Settings";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Home />} />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Login />} />
      </MainLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <MainLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Signup />} />
      </MainLayout>
    ),
  },
  {
    path: "/console/:userID",
    element: (
      <DashboardLayout>
        {/* Use DashboardLayout as the layout */}
        <Route index element={<Console />} />
      </DashboardLayout>
    ),
  },
  {
    path: "/console/:userID/create",
    element: (
      <DashboardLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<CreateForm />} />
      </DashboardLayout>
    ),
  },
  {
    path: "/console/:userID/forms",
    element: (
      <DashboardLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Forms />} />
      </DashboardLayout>
    ),
  },
  {
    path: "/console/:userID/forms/:formID",
    element: (
      <DashboardLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Form />} />
      </DashboardLayout>
    ),
  },
  {
    path: "/console/:userID/settings",
    element: (
      <DashboardLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Settings2 />} />
      </DashboardLayout>
    ),
  },
  {
    path: "/console/:userID/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:username",
    element: <Client />,
  },
  {
    path: "/404/portfolio",
    element: <NoPortfolio />,
  },
];

export default routes;
