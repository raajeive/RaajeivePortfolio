import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: "#e9ecef",
    padding: "10px",
    margin: "0px 10px",
  },
  left: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexDirection: "row",
  },
  divCoursework: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  divCertification: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  Typography: {
    fontFamily: "Trocchi",
    alignSelf: "left",
    fontWeight: "400",
  },
}));

const Courses = (props) => {
  const classes = useStyles();

  console.log("Tech Courses:", props.tech_courses);

  return (
    <Box className={classes.root} id="courses">
      <Typography
        variant="h4"
        style={{
          fontFamily: "Trocchi",
        }}
      >
        Coursework
      </Typography>
      <hr
        style={{
          width: "50%",
          marginTop: "0px",
          paddingTop: "0px",
          opacity: "0.6",
        }}
      ></hr>
      <Box style={{ marginBottom: "10px" }}>
        {Object.keys(props.courses).map((degree, index) => {
          return (
            <div key={index}>
              <h4 style={{ marginTop: "10px", marginBottom: "0px" }}>
                {degree}
              </h4>
              <div className={classes.divCoursework}>
                {props.courses[degree].map((course, id) => {
                  return <li style={{ display: "inline" }}>{course}</li>;
                })}
              </div>
            </div>
          );
        })}
      </Box>

      <Typography
        variant="h4"
        style={{
          fontFamily: "Trocchi",
        }}
      >
        Technical Certifications
      </Typography>
      <hr
        style={{
          width: "50%",
          marginTop: "0px",
          paddingTop: "0px",
          opacity: "0.6",
        }}
      ></hr>
      <Box className={classes.divCertification}>
        {props.tech_courses.map((certification, index) => {
          return (
            <div key={index}>
              <a
                rel="noopener"
                href={
                  certification.link && certification.link !== ""
                    ? certification.link
                    : "javascript:void(0)"
                }
                aria-label="Link"
              >
                <b>{certification.name}</b>
              </a>{" "}
              <i>
                by:{" "}
                <span style={{ fontWeight: "500" }}>{certification.org}</span>
              </i>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Courses;
