import "./App.css";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import PlayerDetails from "./pages/PlayerDetails";
import RootLayout from "./layouts/RootLayout";
import PlayerLayout from "./layouts/PlayerLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import About from "./pages/About.jsx";


const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="players" element={<PlayerLayout />}>
        <Route
          index
          element={
            <Players />
          }
        />
        <Route path=":lastname" element={<PlayerDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
