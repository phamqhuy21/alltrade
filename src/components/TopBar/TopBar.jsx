import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  createStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/Logo.png";
import logo2 from "../../assets/img/Logo2.png";
import jsUcfirst from "../../common/jsUcFirst";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        flexGrow: 1,
        paddingBottom: 8,
      },
      appBar: { backgroundColor: "#181A20" },
      toolBar: { color: "#888888" },
      menuButton: {
        marginRight: 0,
      },
      title: {
        flexGrow: 1,
        fontWeight: "bold",
        fontFamily: "Montserrat",
        fontStyle: "normal",
      },
      iconButton: {
        fontSize: "16px",
      },
      list: {
        color: "#fff",
        padding: 0,
      },
      listItem: { padding: 0 },
    }),
  { index: 1 }
);

function TopBar(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={`${logo}`} alt="logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {jsUcfirst(t("allTrade"))}
          </Typography>
          <IconButton color="inherit" className={classes.iconButton}>
            <i className="fas fa-bell"></i>
          </IconButton>
          <IconButton color="inherit" className={classes.iconButton}>
            <i className="fas fa-cog"></i>
          </IconButton>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <IconButton>
                  <img src={`${logo2}`} alt="logo2" />
                </IconButton>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <p style={{ fontSize: "12px" }}>{`phamqhuy21@gmail.com`}</p>
                }
                secondary={
                  <p style={{ color: "#fff", fontSize: "12px" }}>
                    <span style={{ opacity: 0.5 }}>ID: </span>123456
                  </p>
                }
              />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {};

export default TopBar;
