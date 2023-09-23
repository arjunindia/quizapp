import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";

import Intro from "./Intro";
import ErrorPage from "./ErrorPage";
import Quiz from "./Quiz";
import Result from "./Result";
import Pdf from "./Pdf"
import Home from "./Home";
import Goal from "./Goal";
import GoalResult from "./GoalResult";
import GoalPdf from "./GoalPdf"
import { Divider, Container } from '@chakra-ui/react'
import Loginform from "./loginform";
import Database from "./database";


function StartPage() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <div className="App">

      <Outlet />
      {/* display footer only if the current route is not / */}
      {location.pathname !== "/" && (
        <>
          <Divider colorScheme="blackAlpha" />

          <footer>
            <Container p="20px 0" >
              <p style={{ display: "flex", gap: "10px", textAlign: "center", justifyContent: "center" }}>Developed by <img src="https://ucek.in/images/nssLogo.png" alt="NSS Logo" style={{ height: "25px", display: "inline-flex", alignSelf: "center" }} /> NATIONAL Service Scheme UCEK </p>
            </Container>
          </footer>
        </>
      )}
    </div>

  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/start",
        element: <Intro />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path:"/Pdf",
        element: <Pdf />,
      },
      {
        path: "/goal",
        element: <Goal />,
      },
      {
        path: "/goal/result",
        element: <GoalResult />,
      },
      {
        path:"/GoalPdf",
        element:<GoalPdf/>
      },
      {
        path:"/loginform",
        element:<Loginform/>
      },
      {
        path:"/database",
        element:<Database/>
      }
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}


export default App;
