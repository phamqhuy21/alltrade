import { PATH } from "../const/paths";
import TradingPage from "../pages/TradingPage";

const routes = [
  {
    path: PATH.TRADING,
    exact: false,
    component: () => <TradingPage />,
  },
];

export default routes;
