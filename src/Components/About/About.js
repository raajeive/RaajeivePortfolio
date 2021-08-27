import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdFileDownload } from "react-icons/md";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import profileImage from "../../PortfolioData/profile.png";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#e9ecef",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
  Avatar: {
    height: "35vh",
    width: "35vh",
    float: "left",
    margin: "5px",
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
  return (
    <Box className={classes.root} id="about">
      <Avatar
        className={classes.Avatar}
        alt={props.about.name}
        src={profileImage}
      />
      <Typography
        style={{ margin: "10px", maxWidth: "85%", padding: "10px" }}
        variant="h6"
        color="textSecondary"
        component="p"
      >
        {aboutme}
      </Typography>
      <Typography
        style={{ maxWidth: "85%" }}
        variant="h6"
        color="textSecondary"
        component="p"
      >
        <b> Interests: {interests}</b>
      </Typography>
      <Skills skills={skills}></Skills>
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
    </Box>
  );
};

export default About;
