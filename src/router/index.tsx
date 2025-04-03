import App from "@/App";
import { MainView } from "@/views/MainView.view";
import { AddOrdersView } from "@/views/orders/add-orders.view";
import { EditOrdersView } from "@/views/orders/edit-orders.view";
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
          { path: "/orders/:id", element: <EditOrdersView /> },
        ],
      },
    ],
  },
]);
