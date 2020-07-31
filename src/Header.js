import React from "react";
import {
  makeStyles,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle, VideoCall, MoreVert, Apps } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
    padding: theme.spacing(2),
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  icon: {
    marginRight: ".5rem",
  },
  logo: {
    maxWidth: "80px",
  },
}));

export default function Header() {
  const { appBar, icon, logo } = useStyles();

  return (
    <AppBar color="inherit" className={appBar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item alignItems="center">
            <Grid container justify="space-between" alignItems="center">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <img
                className={logo}
                src="https://raw.githubusercontent.com/lucasnhimi/clone-youtube-materialui/master/public/images/preto.png"
              />
            </Grid>
          </Grid>
          <Grid item>
            <IconButton
              className={icon}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <VideoCall />
            </IconButton>
            <IconButton
              className={icon}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Apps />
            </IconButton>
            <IconButton
              className={icon}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MoreVert />
            </IconButton>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
