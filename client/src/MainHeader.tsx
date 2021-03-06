import React from "react";
import logo from "./logo.svg";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
interface HeaderPropType extends React.Props<any> {
  home: "home" | "about"
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);
  export default function MainHeader(props:HeaderPropType, {}) {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="icon" alt="logo" />
          <Typography variant="h6" className={classes.title}>
            RaspOS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
}

