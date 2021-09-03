import React from "react";
import { Box, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdFileDownload } from "react-icons/md";
import profileImage from "../../PortfolioData/profile.jpg";
import Skills from "../Skills/Skills";
import Courses from "../Courses/Courses";
import Achievements from "../Achievements/Achievements";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    flexGrow: 1,
    background: "#e9ecef",
    overflow: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    padding: "10px",
  },
  paper: {
    padding: "10px",
    margin: "10px",
  },
  button: {
    color: "black",
    border: "1px solid black",
    padding: "14px 28px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "10px",
  },
}));

const downloadResume = () => {
  window.alert("You wanted to download my resume!!!");
};

const About = (props) => {
  const classes = useStyles();
  const aboutme = props.about.aboutme;
  const interests = props.about.interests;
  const skills = props.about.skills;
  const resume_file_location = props.about.resume_file_location;
  const courses = props.about.courses || [];
  const tech_courses = props.about["Technical Certifications"];
  const achievements = props.about.achievements;

  return (
    <Box className={classes.aboutRoot} id="about">
      <Container
        style={{
          textAlign: "center",
          align: "center",
          display: "block",
          backgroundColor: "#fff",
        }}
        maxWidth="md"
        component={Paper}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Trocchi",
          }}
        >
          About Me
        </Typography>
        <hr
          style={{
            width: "50%",
            marginTop: "0px",
            paddingTop: "0px",
            opacity: "0.6",
          }}
        ></hr>
        <div>
          <img
            alt="Profile Image"
            src={profileImage}
            align="center"
            style={{ height: "175px", width: "175px", borderRadius: "50%" }}
          />
          <h3 style={{ padding: "10px", margin: "5px" }} align="center">
            {aboutme}
          </h3>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={resume_file_location}
            target="_blank"
            download
          >
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              startIcon={<MdFileDownload></MdFileDownload>}
              // onClick={downloadResume}
            >
              My Resume!
            </Button>
          </Link>
          <Skills skills={skills}></Skills>
          <Courses courses={courses} tech_courses={tech_courses}></Courses>
          <Achievements achievements={achievements}></Achievements>
        </div>
      </Container>
    </Box>
  );
};

export default About;
