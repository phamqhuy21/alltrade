import { createStyles, List, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import jsUcfirst from "../../common/jsUcFirst";

const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        backgroundColor: "#181A20",
        height: "105vh",
        marginLeft: 5,
      },
      tabs: {},
      tab: {
        textTransform: "none",
        fontWeight: "bold",
        color: "#848E9C",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        minWidth: 70,
        "&:hover": {
          color: "#fff",
          opacity: 1,
        },
        "&:focus": {
          color: "#fff",
        },
        "&:active": {
          color: "#fff",
        },
      },
    }),
  { index: 1 }
);

export default function NavBarRight(props) {
  const classes = useStyles();
  const { children } = props;
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={jsUcfirst(t("openOrder"))} className={classes.tab} />
        <Tab label={jsUcfirst(t("closingOrder"))} className={classes.tab} />
      </Tabs>
      <List>{children}</List>
    </div>
  );
}
