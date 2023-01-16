import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
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

function StartPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Outlet />
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
