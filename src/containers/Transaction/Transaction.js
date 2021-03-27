import { Grid } from "@material-ui/core";
import BitcoinTrendItem from "../../components/NavBar/BitcoinTrendItem";
import BitcoinTrendTab from "../../components/NavBar/BitcoinTrendTab";
import NavBarRight from "../../components/NavBar/NavBarRight";

function Transaction(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={10} style={{ display: "flex" }}>
          {/* <Grid container spacing={0}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <BitcoinTrendTab />
            </Grid>
          </Grid> */}
          <div style={{ width: "88%" }}></div>
          <div style={{ width: "12%" }}>
            <BitcoinTrendTab />
          </div>
        </Grid>
        <Grid item xs={2}>
          <NavBarRight>
            <BitcoinTrendItem />
            <BitcoinTrendItem />
            <BitcoinTrendItem />
            <BitcoinTrendItem />
            <BitcoinTrendItem />
            <BitcoinTrendItem />
          </NavBarRight>
        </Grid>
      </Grid>
    </div>
  );
}

export default Transaction;
