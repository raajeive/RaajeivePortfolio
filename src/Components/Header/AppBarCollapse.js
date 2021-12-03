import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  Button: { marginLeft: "10px", fontWeight: "bold", color: "white" },
});

const myScrollFunc = function (ele) {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 40,
    behavior: "smooth",
  });
};

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem
        onClick={() => {
          myScrollFunc("about");
        }}
      >
        About
      </MenuItem>
      <MenuItem
        onClick={() => {
          myScrollFunc("skills");
        }}
      >
        Skills
      </MenuItem>
      <MenuItem
        onClick={() => {
          myScrollFunc("experience");
        }}
      >
        Experience
      </MenuItem>
      <MenuItem
        onClick={() => {
          myScrollFunc("education");
        }}
      >
        Education
      </MenuItem>
      {/* <MenuItem
        onClick={() => {
          myScrollFunc("project");
        }}
      >
        Projects
      </MenuItem>
      <MenuItem
        onClick={() => {
          myScrollFunc("publication");
        }}
      >
        Publications
      </MenuItem> */}
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button
        className={props.classes.Button}
        // startIcon={<MdAccountCircle></MdAccountCircle>}
        onClick={() => {
          myScrollFunc("about");
        }}
      >
        About
      </Button>
      <Button
        className={props.classes.Button}
        onClick={() => {
          myScrollFunc("experience");
        }}
      >
        Experience
      </Button>
      <Button
        className={props.classes.Button}
        onClick={() => {
          myScrollFunc("education");
        }}
      >
        Education
      </Button>
      {/* <Button
        className={props.classes.Button}
        onClick={() => {
          myScrollFunc("project");
        }}
      >
        Projects
      </Button>
      <Button
        className={props.classes.Button}
        onClick={() => {
          myScrollFunc("publication");
        }}
      >
        Publications
      </Button>
      <Button
        className={props.classes.Button}
        onClick={() => {
          myScrollFunc("skills");
        }}
      >
        Skills
      </Button> */}
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
