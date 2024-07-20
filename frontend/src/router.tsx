import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import ProviderWrapper from "./ProviderWrapper";

const router = createBrowserRouter([
  {
    element: <ProviderWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);

export default router;