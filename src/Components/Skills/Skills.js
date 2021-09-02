import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "#e9ecef",
    padding: "10px",
    margin: "0px 10px",
  },
  Typography: {
    fontFamily: "Trocchi",
    alignSelf: "left",
    fontWeight: "400",
  },
}));

const Skills = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="skills">
      <Typography
        variant="h4"
        style={{
          fontFamily: "Trocchi",
        }}
      >
        Skills
      </Typography>
      <hr
        style={{
          width: "50%",
          marginTop: "0px",
          paddingTop: "0px",
          opacity: "0.6",
        }}
      ></hr>
      {Object.keys(props.skills).map((key, id) => {
        return (
          <div key={id}>
            <h4>{key}</h4>
            {props.skills[key].map((skill, index) => {
              return skill.src && skill.src !== "" ? (
                <img
                  style={{ paddingInline: "5px", height: "30px" }}
                  alt={skill.skill}
                  src={skill.src ? skill.src : null}
                  key={index}
                />
              ) : (
                <li
                  style={{
                    color: "white",
                    borderRadius: "0.4em",
                    backgroundColor: "black",
                    fontSize: "1em",
                  }}
                  key={index}
                >
                  {skill.skill}
                </li>
              );
            })}
          </div>
        );
      })}
    </Box>
  );
};

export default Skills;
