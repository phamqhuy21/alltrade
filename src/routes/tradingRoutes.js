import { PATH } from "../const/paths";
import TranSaction from "../containers/Transaction/Transaction";

const routes = [
  {
    path: PATH.TRANSACTION,
    exact: true,
    component: () => <TranSaction />,
  },
];

export default routes;
