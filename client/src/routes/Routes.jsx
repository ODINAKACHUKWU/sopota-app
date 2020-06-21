import HomePage from "../views/pages/HomePage";
import LandingPage from "../views/pages/LandingPage";
import SignupPage from "../views/pages/SignupPage";
import NotFoundPage from "../views/pages/NotFoundPage";
import RequestPage from "../views/pages/RequestPage";
import TicketsPage from "../views/pages/TicketsPage";
import AccountPage from "../views/pages/AccountPage";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      path: "/signup",
      component: SignupPage,
    },
  ],
  secured: [
    {
      path: "/dashboard",
      component: LandingPage,
    },
    {
      path: "/request",
      component: RequestPage,
    },
    {
      path: "/tickets",
      component: TicketsPage,
    },
    {
      path: "/account",
      component: AccountPage,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};
