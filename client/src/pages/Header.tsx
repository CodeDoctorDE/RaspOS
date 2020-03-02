import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
interface HeaderPropType {
  home: "home" | "about";
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
  export default function Header(props: HeaderPropType) {
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
          <Link to="/">Home</Link>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
     