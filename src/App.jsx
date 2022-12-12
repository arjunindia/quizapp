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
        element: <Intro />,  
      },
      {
        path: "/quiz",
        element: <Quiz />,
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
