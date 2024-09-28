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
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import PlayerLayout from "./layouts/PlayerLayout.jsx";
import CRFAPlayers from "./Data/PlayerData.js";
// import Goalkeeper from "./pages/players/Goalkeeper.jsx";
// import Defenders from "./pages/players/Defenders";

// import Midfielders from "./pages/players/Midfielders";
// import Forwards from "./pages/players/Forwards";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Fixtures from "./pages/Fixtures.jsx";
import Fans from "./pages/Fans.jsx";

const goalkeepers = CRFAPlayers.filter(
  (item) => item.position === "goalkeeper"
);

const defenders = CRFAPlayers.filter((item) => item.position === "defender");

const midfielders = CRFAPlayers.filter(
  (item) => item.position === "midfielder"
);

const forwards = CRFAPlayers.filter((item) => item.position === "forward");

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="fixtures" element={<Fixtures />} />
      {/* <Route path="fans" element={<Fans />} /> */}
      {/* <Route path="players" element={<Players />} /> */}

      {/* <Route path="players" element={<PlayerLayout />} >
      </Route> */}

      <Route path="players" element={<PlayerLayout />}>
        <Route
          index
          element={
            <Players
              gk={goalkeepers}
              df={defenders}
              mf={midfielders}
              fw={forwards}
            />
          }
        />
        <Route path=":id" element={<PlayerDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
