import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DetailPageCat from "./components/DetailPageCat";
import ErrorPage from "./components/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/:catId",
      element: <DetailPageCat />,
      errorElement: <ErrorPage />,
    },
  ]);

  export default router;