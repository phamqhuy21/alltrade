import routes from "../routes/tradingRoutes";
import { Route } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import SideBar from "../components/SideBar/SideBar";
import { createStyles, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        backgroundColor: "#0c0c0c",
        color: "#fff",
      },
      body: { width: "94%" },
    }),
  { index: 1 }
);

export default function TradingPage() {
  const classes = useStyles();

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
    <div className={classes.root}>
      <Grid container spacing={1}>
        <TopBar />
      </Grid>
      <Grid container spacing={1}>
        <SideBar />
        <div className={classes.body}>{showBody(routes)}</div>
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
