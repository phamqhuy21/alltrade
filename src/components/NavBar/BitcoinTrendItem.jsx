import {
  Typography,
  ListItem,
  makeStyles,
  createStyles,
  Divider,
} from "@material-ui/core";
import TrendingUp from "../../assets/img/TrendingUp.png";
import Btc from "../../assets/img/Btc.png";
import jsUcfirst from "../../common/jsUcFirst";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "space-between",
        color: "#848E9C",
      },
      rowItem: { paddingBottom: 5 },
      trend: { display: "flex", alignContent: "center", paddingBottom: 5 },
      typographyTrendUp: {
        marginLeft: "10px",
        paddingTop: "2px",
        color: "#2CAC40",
      },
      typographyTrendDown: {
        marginLeft: "10px",
        paddingTop: "2px",
        color: "#C8533C",
      },
      divider: { backgroundColor: "#424242", width: "88%", marginLeft: 16 },
    }),
  { index: 1 }
);

export default function BitcoinTrendItem() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <ListItem className={classes.root}>
        <div>
          <Typography variant="body1" className={classes.rowItem}>
            {jsUcfirst(t("BTC/USD"))}
          </Typography>
          <div className={classes.trend}>
            <img src={`${TrendingUp}`} alt="TrendingUp"></img>
            <Typography variant="body2" className={classes.typographyTrendUp}>
              {jsUcfirst(t("buy"))}
            </Typography>
          </div>
          <Typography variant="body2">03-22 12:02:41</Typography>
        </div>
        <div style={{ textAlign: "right" }}>
          <img src={Btc} alt="btc" className={classes.rowItem} />
          <Typography variant="body1" className={classes.rowItem}>
            $200
          </Typography>
          <Typography variant="body2"> --- </Typography>
        </div>
      </ListItem>
      <Divider className={classes.divider} />
    </>
  );
}
