import App from "@/App";
import { MainView } from "@/views/MainView.view";
import { AddOrdersView } from "@/views/orders/add-orders.view";
import { EditOrdersView } from "@/views/orders/edit-orders.view";
import { OrdersView } from "@/views/orders/orders.view";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-route";
import { LoginView } from "@/views/login/login.view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginView /> },
      {
        path: "",
        element:
          <PrivateRoute>
            <MainView />
          </PrivateRoute>,
        children: [
          {
            path: "orders",
            element: <OrdersView />,
          },
          { path: "orders/new-order", element: <AddOrdersView /> },
          { path: "orders/:id", element: <EditOrdersView /> },
        ],
      },
      {
        path: "*",
        element:
          <div>
            <h1>Page not found 404</h1>
          </div>,
      },
    ],
  },
]);
