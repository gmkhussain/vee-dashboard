import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public";

const routes = [...PublicRoutes, /* private routes in future */];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;