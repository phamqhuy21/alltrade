import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Dashboard from "../../assets/img/Dashboard.png";
import AccountGroup from "../../assets/img/AccountGroup.png";
import Bot from "../../assets/img/Bot.png";
import Exchange from "../../assets/img/Exchange.png";
import Wallet from "../../assets/img/Wallet.png";
import Account from "../../assets/img/Account.png";
import jsUcfirst from "../../common/jsUcFirst";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        backgroundColor: "#181A20",
        color: "#fff",
        minHeight: "105vh",
        width: "6%",
      },
      iconItem: { textAlign: "center" },
    }),
  { index: 1 }
);

function SideBar(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button selected={true}>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Exchange}`} alt="Exchange" width={25} />}
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("exchange"))}
              </p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Wallet}`} alt="Wallet" width={25} />}
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("wallet"))}
              </p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Bot}`} alt="Diamond" width={25} />}
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("tradingBot"))}
              </p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={
              <img src={`${AccountGroup}`} alt="AccountGroup" width={25} />
            }
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("referral"))}
              </p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Account}`} alt="Account" width={25} />}
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("profile"))}
              </p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Dashboard}`} alt="Dashboard" width={25} />}
            secondary={
              <p style={{ fontSize: "12px", color: "#848E9C" }}>
                {jsUcfirst(t("dashBoard"))}
              </p>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
