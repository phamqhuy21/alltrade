import {
  Button,
  Card,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Popover,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import jsUcfirst from "../../common/jsUcFirst";
import DollarReal from "../../assets/img/DollarReal.png";
import TrendingUpReverse from "../../assets/img/TrendingUpReverse.png";
import TrendingDownReverse from "../../assets/img/TrendingDownReverse.png";
import CloseCircle from "../../assets/img/CloseCircle.png";
import CircularProgress from "../Progress/CircularProgress";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        backgroundColor: "#181A20",
        height: "105vh",
        padding: "0 10px",
      },
      accountCard: {
        padding: "5px 5px 5px 10px",
        backgroundColor: "hsla(0, 0%, 100%, 0.14)",
        "&:hover": {
          backgroundColor: "hsla(0, 0%, 100%, 0.24)",
          cursor: "pointer",
        },
      },
      paper: { width: 350 },
      headerAccountsCard: {
        padding: "5px 10px",
      },
      list: { padding: 0 },
      listItem: { padding: "0 10px" },
      buttonActionAccount: {
        textTransform: "none",
        backgroundColor: "#535763",
      },
      gridItem: {
        backgroundColor: "#2A2D35",
        margin: "2px 1px",
        width: "95%",
        textAlign: "center",
        padding: "10px",
      },
      buttonTrendingUp: {
        backgroundColor: "#2CAC40",
        textAlign: "center",
        marginBottom: 10,
        padding: 15,
        borderRadius: 2,
        cursor: "pointer",
      },
      buttonTrendingDown: {
        backgroundColor: "#B14B38",
        textAlign: "center",
        padding: 15,
        borderRadius: 2,
        cursor: "pointer",
      },
    }),
  { index: 1 }
);

export default function BitcoinTrendTab() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <div style={{ height: 20 }}></div>
      <Card
        className={classes.accountCard}
        style={{ color: "#FF7700" }}
        onClick={handleClick}
      >
        <Typography variant="body2">{jsUcfirst(t("demoAccount"))}</Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">$9,000.00</Typography>
          <ArrowDropDownIcon />
        </div>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ borderRadius: 0 }}
      >
        <Paper className={classes.paper} square>
          <Typography className={classes.headerAccountsCard}>
            {jsUcfirst(t("myAccount"))}
          </Typography>
          <List className={classes.list}>
            <ListItem button className={classes.listItem}>
              <img
                src={`${DollarReal}`}
                alt="DollarReal"
                style={{ marginRight: "10px", marginBottom: 15 }}
              ></img>
              <ListItemText primary="huh" secondary="hah" />
              <Button
                variant="contained"
                className={classes.buttonActionAccount}
              >
                huhuhu
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Popover>
      <div style={{ height: 20 }}></div>
      <div style={{ textAlign: "center" }}>
        <CircularProgress
          strokeWidth={3}
          percentage={50}
          width="100%"
          primary={19}
          secondary="Hãy đặt lệnh"
        />
      </div>
      <div style={{ height: 20 }}></div>
      <div>
        <Grid container spacing={1}>
          <div className={classes.gridItem} style={{ width: "100%" }}>
            $1,089.00{" "}
            <img
              src={`${CloseCircle}`}
              alt="CloseCircle"
              style={{ marginLeft: 20, paddingTop: 5 }}
            ></img>
          </div>

          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
          <div className={classes.gridItem} style={{ width: "48%" }}>
            $20
          </div>
        </Grid>
      </div>
      <div style={{ height: 20 }}></div>
      <div>
        <div className={classes.buttonTrendingUp}>
          <img src={`${TrendingUpReverse}`} alt="TrendingUpReverse"></img>
          <Typography variant="h6">{jsUcfirst(t("buy"))}</Typography>
        </div>
        <div className={classes.buttonTrendingDown}>
          <img src={`${TrendingDownReverse}`} alt="TrendingDownReverse"></img>
          <Typography variant="h6">{jsUcfirst(t("sell"))}</Typography>
        </div>
      </div>
    </div>
  );
}
