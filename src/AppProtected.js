import { lazy } from "react";
import { Container, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { MediaQueryBreakpointEnum } from "constants/Global";
import { Navigate, useRoutes } from "react-router-dom";
import Suspense from "common/Suspense";
import { configureRoutes } from "utils/RouteUtils";
import { RouteEnum } from "constants/RouteConstants";
import Box from "@mui/material/Box";
import SideBar from "features/sideBar/SideBar";

function AppProtected(props) {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const routes = useRoutes(ROUTES);
  return (
    <>
      {/* <Container maxWidth="xl"> */}
      {
        <div className="flex ">
          <SideBar />
          <Box className="px-8" component="" sx={{ flexGrow: 1 }}>
            <Suspense>{routes}</Suspense>
          </Box>
        </div>
      }

      {/* </Container> */}
    </>
  );
}

export default AppProtected;

const ROUTES = configureRoutes([
  {
    path: "*",
    // element: lazy(() => import("features/home/Home")),

    element: <Navigate to={RouteEnum.DASHBOARD} replace />,
  },
  // {
  //   path: RouteEnum.HOME,
  //   element: lazy(() => import("features/home/Home")),
  // },
  {
    path: RouteEnum.FORGOTPASSWORD,
    element: lazy(() => import("features/login/ForgotPassword")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.DASHBOARD,
    element: lazy(() => import("features/dashboard/Dashboard")),
  },
  {
    path: RouteEnum.MANAGE_COMPANIES,
    element: lazy(() => import("features/manageCompanies/History")),
  },
  {
    path: RouteEnum.MANAGE_RIDERS,
    element: lazy(() => import("features/wallet/ManageRiders")),
  },
  {
    path: RouteEnum.TRIPS,
    element: lazy(() => import("features/manageriders/Trips")),
  },
  {
    path: RouteEnum.MAPS,
    element: lazy(() => import("features/maps/Maps")),
  },
  {
    path: RouteEnum.SUPPORT,
    element: lazy(() => import("features/addriders/Support")),
  },
  {
    path: RouteEnum.PROFILE,
    element: lazy(() => import("features/profile/Profile")),
  },
]);
