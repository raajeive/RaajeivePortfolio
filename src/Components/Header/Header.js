import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
import AppBarCollapse from "./AppBarCollapse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    boxShadow: "none",
    // backgroundColor: "rgb(245, 245, 245)",
    // background: "linear-gradient(#f5f5f5,hsla(0,0%,96.1%,0))",
    backgroundColor: "transparent",
  },
  AppBarScroll: {
    boxShadow: "none",
    backgroundColor: "#343a40!important",
    // background: "rgb(52, 58, 64)",
    // background:
    //   "linear-gradient(180deg, rgba(52,58,64,0.950315160243785) 72%, rgba(23,20,20,0.7206232834930848) 100%)",
    // opacity: 0.5,
    // backgroundColor: "transparent",
  },
  Typography: {
    // marginLeft: "10px",
    // fontWeight: "bold",
    // border: "2px solid",
    // color: "white",
    fontWeight: "700",
    fontFamily: "AgustinaRegular",
  },
  Button: {
    fontWeight: "bold",
    color: "black",
  },
}));

const myScrollFunc = function (ele) {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 40,
    behavior: "smooth",
  });
};

export default function DenseAppBar() {
  const classes = useStyles();
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });
  return (
    <div className={classes.root}>
      {/* fixed */}
      <AppBar
        id="navbar"
        className={`${classes.AppBar} ${show && classes.AppBarScroll}`}
        position="fixed"
      >
        <Toolbar variant="dense">
          <Button className={classes.Button}>
            <span>{"</"}</span>
            <span
              className="logo"
              onClick={() => {
                myScrollFunc("home");
              }}
            >
              Raajeive
            </span>
            <span>{">"}</span>
          </Button>
        </Toolbar>
        <AppBarCollapse></AppBarCollapse>
      </AppBar>
    </div>
  );
}
