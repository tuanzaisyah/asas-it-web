import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Video from "./pages/Video";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function App() {
  const Layout = () => {
    return (
      <div className="max-w-[1440px] flex flex-col justify-center mx-auto">
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/note/:id",
          element: <Note />,
        },
        {
          path: "/video/:id",
          element: <Video />,
        },
        {
          path: "/quiz/:id",
          element: <Quiz />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
