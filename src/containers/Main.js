import routes from "../routes/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Main() {
  const showBody = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <div>
      <Router>{showBody(routes)}</Router>
    </div>
  );
}
