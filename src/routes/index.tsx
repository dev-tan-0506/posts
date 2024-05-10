import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index.tsx";
import PostDetail from "../pages/PostDetail/index.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "users",
        children: [
          {
            path: ":id",
            element: <div>The user detail page</div>,
          },
          {
            path: "",
            element: <div>The all users page</div>,
          },
        ],
      },
      {
        path: "posts",
        children: [
          {
            path: ":id",
            element: <PostDetail />,
          },
          {
            path: "",
            element: <div>The all posts page</div>,
          },
        ],
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
