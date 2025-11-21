
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/singlepost", element: <Singlepost /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
