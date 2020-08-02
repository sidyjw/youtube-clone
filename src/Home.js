import React from "react";
import DrawerYt from "./DrawerYt";
import Header from "./Header";
import { Grid } from "@material-ui/core";
export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <DrawerYt />
        </Grid>
        <Grid item>
          <div>eeee</div>
        </Grid>
      </Grid>
    </>
  );
}
