import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../../Components/Home/Home";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import About from "../../Components/About/About";
import Publication from "../../Components/Publication/Publication";
import Project from "../../Components/Project/Project";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typography: {
    fontWeight: 300,
    lineHeight: 1.2,
    color: "white",
  },
}));

const Main = (props) => {
  const classes = useStyles();
  console.log("Resume Data", props.portfolioData);
  return (
    <Box className={classes.root}>
      <Home about={props.portfolioData.about}></Home>
      <About about={props.portfolioData.about}></About>
      <Experience experience={props.portfolioData.experience}></Experience>
      <Education education={props.portfolioData.education}></Education>
      <Project project={props.portfolioData.project}></Project>
      <Publication publication={props.portfolioData.publication}></Publication>
    </Box>
  );
};

export default Main;
