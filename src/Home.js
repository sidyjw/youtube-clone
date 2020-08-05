import React from "react";
import { Box, Hidden } from "@material-ui/core";
import DrawerYt from "./DrawerYt";
import Header from "./Header";
import VideoGrid from "./VideoGrid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentTop: {
    marginTop: theme.spacing(8),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <Box
        height="100%"
        width="100%"
        display="flex"
        className={classes.contentTop}
      >
        <Hidden smDown>
          <DrawerYt />
        </Hidden>
        <Box p={4}>
          <VideoGrid />
        </Box>
      </Box>
    </>
  );
}
