import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "#e9ecef",
    // padding: "10px",
    width: "100%",
    margin: "0px",
    // maxWidth: "85%",
  },
  Typography: {
    fontFamily: "Trocchi",
    alignSelf: "left",
  },
}));

const TechStack = (props) => {
  const data = props.tech;
  const classes = useStyles();

  return (
    <Box className={classes.root} id="skills">
      <ul
        style={{
          paddingInline: "2rem",
        }}
      >
        {data.map((item, index) => (
          <li
            style={{
              margin: "5px",
              fontSize: "small",
              backgroundColor: "#343a40",
              color: "white",
              borderRadius: "10em",
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TechStack;
