
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import Layout from "./pages/Layout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {  path: "/home", element: <Home /> },
      { path: "/singlepost", element: <Singlepost /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
