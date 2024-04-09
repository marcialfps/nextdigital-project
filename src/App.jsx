import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import UserDetails from "./routes/user";
import AlbumDetails from "./routes/album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "users/:userId",
    element: <UserDetails />,
  },
  {
    path: "albums/:albumId",
    element: <AlbumDetails />,
  },
]);

function App() {
  return (
    <>
      <header>
        <h1>Prueba Next Digital - marcialfps</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
