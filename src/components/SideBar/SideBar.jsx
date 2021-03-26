import {
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Dashboard from "../../assets/img/Dashboard.png";
import AccountGroup from "../../assets/img/AccountGroup.png";
import Diamond from "../../assets/img/Diamond.png";
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
        minHeight: "95vh",
        maxWidth: 85,
      },
      iconItem: { textAlign: "center", filter: "invert(75%)" },
    }),
  { index: 1 }
);

function SideBar(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Exchange}`} alt="Exchange" width={25} />}
            secondary={
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("exchange"))}</p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Wallet}`} alt="Wallet" width={25} />}
            secondary={
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("wallet"))}</p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Diamond}`} alt="Diamond" width={25} />}
            secondary={
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("vipMember"))}</p>
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
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("referral"))}</p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Account}`} alt="Account" width={25} />}
            secondary={
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("profile"))}</p>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.iconItem}
            primary={<img src={`${Dashboard}`} alt="Dashboard" width={25} />}
            secondary={
              <p style={{ fontSize: "12px" }}>{jsUcfirst(t("dashBoard"))}</p>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
