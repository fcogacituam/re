import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Nope } from "../pages/nope";
import { Componentized } from "../pages/componentized";
import { WithContext } from "../pages/contexts";
import { Redux } from "../pages/redux";
import { Jotai } from "../pages/jotai";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nope",
    element: <Nope />,
  },
  {
    path: "/componentized",
    element: <Componentized />,
  },
  {
    path: "/context",
    element: <WithContext />,
  },
  {
    path: "/redux",
    element: <Redux />,
  },
  {
    path: "/jotai",
    element: <Jotai />,
  },
]);
