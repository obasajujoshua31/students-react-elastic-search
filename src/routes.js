import Home from "./pages/Home";
import Actors from "./pages/Actor";
import NotFound from "./pages/NotFound";
import OneActor from "./pages/OneActor";
import SearchResultPage from "./pages/SearchResults";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/actors",
    component: Actors,
    exact: true,
  },
  {
    path: "/actors/:id",
    component: OneActor,
  },

  {
    path: "/search",
    component: SearchResultPage,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
