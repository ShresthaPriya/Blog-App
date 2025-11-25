
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreateBlog";
import MyPosts from "./pages/MyPost";
import EditPost from "./pages/EditPosts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/singlepost", element: <Singlepost /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/add-post", element: <CreatePost/>},
      { path: "/my-posts", element: <MyPosts/>},
    { path:"/edit-post/:id", element:<EditPost /> }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
