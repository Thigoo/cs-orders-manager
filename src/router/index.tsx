import App from "@/App";
import { MainView } from "@/views/MainView.view";
import { AddOrdersView } from "@/views/orders/components/add-orders.view";
import { OrdersView } from "@/views/orders/orders.view";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainView />,
        children: [
          {
            path: "/orders",
            element: <OrdersView />,
          },
          { path: "/orders/new-order", element: <AddOrdersView /> },
        ],
      },
    ],
  },
]);
