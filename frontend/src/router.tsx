import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import ProviderCheckpoint from "./checkpoints/ProviderCheckpoint";

const router = createBrowserRouter([
  {
    element: <ProviderCheckpoint />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);

export default router;