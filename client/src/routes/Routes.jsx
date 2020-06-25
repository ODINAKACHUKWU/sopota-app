import HomePage from "../views/pages/HomePage";
import LandingPage from "../views/pages/LandingPage";
import SignupPage from "../views/pages/SignupPage";
import NotFoundPage from "../views/pages/NotFoundPage";
import RequestPage from "../views/pages/RequestPage";
import TicketsPage from "../views/pages/TicketsPage";
import AccountPage from "../views/pages/AccountPage";
import TicketPage from "../views/pages/TicketPage";
import AgentLandingPage from "../views/pages/AgentLandingPage";
import AgentTicketsPage from "../views/pages/AgentTicketsPage";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      exact: true,
      path: "/signup",
      component: SignupPage,
    },
  ],
  secured: [
    {
      exact: true,
      path: "/dashboard",
      component: LandingPage,
    },
    {
      exact: true,
      path: "/dashboard/agent",
      component: AgentLandingPage,
    },
    {
      exact: true,
      path: "/agent/tickets",
      component: AgentTicketsPage,
    },
    {
      exact: true,
      path: "/request",
      component: RequestPage,
    },
    {
      exact: true,
      path: "/tickets",
      component: TicketsPage,
    },
    {
      exact: true,
      path: "/tickets/:id",
      component: TicketPage,
    },
    {
      exact: true,
      path: "/account",
      component: AccountPage,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};
