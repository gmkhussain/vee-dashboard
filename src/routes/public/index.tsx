import PublicLayout from "../../views/layout/public";
import { publicRoutes as routes } from "./Public";
 
export const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [...routes]
  }
];