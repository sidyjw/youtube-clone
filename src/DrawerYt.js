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

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "200px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "200px",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DrawerYt({ header }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={true}
      variant="persistent"
    >
      {header}
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button>
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary={"Inicio"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary={"Em alta"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary={"Inscrições"} />
          </ListItem>
        </List>
        <Divider />
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

export default DrawerYt;
