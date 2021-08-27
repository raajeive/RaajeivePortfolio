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

const Footer = (props) => {
  const data = props.tech;
  const classes = useStyles();

  return (
    <Box className={classes.root} id="skills">
      <ul
        style={{
          padding: "0px",
        }}
      >
        {data.map((item) => (
          <Button
            style={{
              margin: "5px",
              backgroundColor: "#343a40",
              color: "white",
            }}
            variant="contained"
            color="primary"
            size="small"
            disabled={true}
          >
            {item}
          </Button>
        ))}
      </ul>
    </Box>
  );
};

export default Footer;
