import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Whatshot, Subscriptions, VideoLibrary } from "@material-ui/icons";
import clsx from "clsx";
import { GlobalContext } from "./GlobalContext";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 20,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  removeBorderRight: {
    borderRight: "none",
  },
  listItemFontSize: {
    fontSize: 14,
  },
  drawerTopPadding: {
    paddingTop: theme.spacing(8),
  },
  closedDrawerButton: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiListItemIcon-root": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiListItemText-root span": {
      fontSize: 10,
    },
  },
}));

function DrawerYt() {
  const classes = useStyles();
  const global = React.useContext(GlobalContext);
  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: global.menuIsOpen,
        [classes.drawerClose]: !global.menuIsOpen,
      })}
      classes={{
        paper: clsx(classes.drawerTopPadding, {
          [classes.drawerOpen]: global.menuIsOpen,
          [classes.drawerClose]: !global.menuIsOpen,
        }),
        paperAnchorDockedLeft: classes.removeBorderRight,
      }}
      anchor="left"
      variant="permanent"
    >
      <div className={classes.drawerContainer}>
        {/* <Divider /> */}
        <List>
          <ListItemDrawer text={"Início"} icon={<HomeIcon />} />
          <ListItemDrawer text="Em alta" icon={<Whatshot />} />
          <ListItemDrawer text="Inscrições" icon={<Subscriptions />} />
          {!global.menuIsOpen && (
            <ListItemDrawer text="Biblioteca" icon={<VideoLibrary />} />
          )}
        </List>
        {global.menuIsOpen && <Divider />}
        <List>
          {/* {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
        </List>
      </div>
    </Drawer>
  );
}

function ListItemDrawer({ text, icon }) {
  const classes = useStyles();
  const global = React.useContext(GlobalContext);

  return (
    <ListItem
      button
      classes={{
        root: clsx({
          [classes.closedDrawerButton]: !global.menuIsOpen,
        }),
      }}
    >
      <ListItemIcon children={icon} />
      <ListItemText
        classes={{
          primary: classes.listItemFontSize,
        }}
        primary={text}
      />
    </ListItem>
  );
}

export default DrawerYt;
