import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TechStack from "../TechStack/TechStack";
import ModalInfo from "./ModalInfo";
import IconButton from "@material-ui/core/IconButton";
import { FaGithub } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(to right, #D7DDE8, #757F9A)",
    // minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    padding: "10px",
    background: "linear-gradient(to right, #D7DDE8, #757F9A)",
    // minHeight: "100vh",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    minHeight: "400px",
    flexGrow: 1,
    // background: "rgb(23, 42, 69)",
    // maxHeight: "35vh",
    // overflowY: "scroll",
  },
  faButton: {
    padding: "0px",
    color: "black",
    fontSize: "40px",
    textDecoration: "none",
    "&:hover": { color: "steelblue" },
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const projectData = props.project;

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root} id="project">
      <Paper className={classes.paper} elevation={0}>
        <ModalInfo
          data={data}
          open={open}
          handleClose={handleClose}
        ></ModalInfo>
        <Typography
          variant="h2"
          style={{
            color: "white",
            paddingBottom: "10px",
            fontFamily: "Trocchi",
          }}
        >
          Projects
        </Typography>
        <Grid
          style={{ padding: "10px", paddingInline: "10%" }}
          container
          justify="center"
          spacing={2}
        >
          {projectData.map((project) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={project.id}>
              <Box style={{ height: "100%" }} key={project.id}>
                <Paper style={{ height: "100%" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: 700,
                      // fontStyle: "italic",
                      fontSize: "large",
                      fontFamily:
                        "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
                      // marginTop: "5px",
                      // margin: "2rem 0px 10px",
                      padding: "0.75rem 0.75rem 0rem 0.75rem",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontFamily:
                        "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
                      fontSize: "medium",
                      letterSpacing: "0.0001em",
                      margin: "10px 5px 10px",
                      paddingInline: "2rem",
                      textAlign: "center",
                    }}
                  >
                    {project.abstract}
                  </Typography>
                  {project.url != "" ? (
                    <IconButton
                      target="_blank"
                      href={project.url}
                      size="medium"
                      className={classes.faButton}
                    >
                      <FaGithub href="#"></FaGithub>
                    </IconButton>
                  ) : (
                    ""
                  )}
                  <div style={{ marginTop: "auto" }}>
                    <TechStack tech={project.tech}></TechStack>
                  </div>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Project;
