import HomePage from "../pages/home-page";
import { Layout } from "../pages/layout";
import PoliticalPartyPage from "../pages/political-party-page";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/political-party",
        element: <PoliticalPartyPage />,
      },
    ],
  },
];
