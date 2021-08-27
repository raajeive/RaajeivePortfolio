import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#e9ecef",
    padding: "10px",
    margin: "0px",
    maxWidth: "85%",
  },
  Typography: {
    fontFamily: "Trocchi",
    alignSelf: "left",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="skills">
      <Typography variant="h4" className={classes.Typography}>
        Skills:
      </Typography>
      <ul>
        {props.skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </Box>
  );
};

export default Footer;
