import routes from "../routes/tradingRoutes";
import { Route } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import SideBar from "../components/SideBar/SideBar";
import { Grid } from "@material-ui/core";

export default function TradingPage() {
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
    return result;
  };

  return (
    <div>
      <TopBar />
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
          {showBody(routes)}
        </Grid>
      </Grid>
      {/* <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>
        <div>{showBody(routes)}</div>
      </div> */}
    </div>
  );
}
