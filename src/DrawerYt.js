import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import {
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  AccountCircle,
} from "@material-ui/icons";
import clsx from "clsx";
import { GlobalContext } from "./GlobalContext";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerOpen: {
    width: drawerWidth,
  },
  drawerClose: {
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
  paddingLeftItem: {
    paddingLeft: theme.spacing(3),
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
      transitionDuration={0}
    >
      <List>
        <ListItemDrawer text={"Início"} icon={<HomeIcon />} />
        <ListItemDrawer text="Em alta" icon={<Whatshot />} />
        <ListItemDrawer text="Inscrições" icon={<Subscriptions />} />
        {!global.menuIsOpen && (
          <ListItemDrawer text="Biblioteca" icon={<VideoLibrary />} />
        )}
      </List>
      {global.menuIsOpen && (
        <>
          <Divider />
          <List>
            <ListItemDrawer text="Início" icon={<VideoLibrary />} />
            <ListItemDrawer text="Histórico" icon={<History />} />
          </List>
          <Divider />
          <Box
            p="16px 24px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box marginTop="12px" display="flex" justifyContent="flex-start">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                FAZER LOGIN
              </Button>
            </Box>
          </Box>
        </>
      )}
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
          [classes.paddingLeftItem]: global.menuIsOpen,
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
