import App from "@/App";
import { MainView } from "@/views/MainView.view";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainView />,
      },
    ],
  },
]);
