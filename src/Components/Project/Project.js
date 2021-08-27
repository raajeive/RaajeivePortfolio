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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    minHeight: "30vh",
    // maxHeight: "35vh",
    // overflowY: "scroll",
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
          Projects:
        </Typography>
        <Grid container justify="center" spacing={2} alignItems="stretch">
          {projectData.map((project) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              justify="center"
              style={{ height: "100%" }}
              key={project.id}
            >
              <Box style={{ height: "100%" }} key={project.id}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        fontStyle: "italic",
                        fontSize: "large",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <TechStack tech={project.tech}></TechStack>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button
                      onClick={() => {
                        setData(project);
                        setOpen(true);
                      }}
                      target="_blank"
                      size="small"
                      variant="outlined"
                      color="primary"
                      style={
                        {
                          // backgroundColor: "#343a40",
                          // color: "white",
                        }
                      }
                    >
                      More INFO
                    </Button>
                    {project.url != "" ? (
                      <IconButton
                        target="_blank"
                        href={project.url}
                        size="medium"
                      >
                        <FaGithub
                          href="#"
                          color="black"
                          padding="5px 5px"
                          fontSize="40px"
                        ></FaGithub>
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Project;
