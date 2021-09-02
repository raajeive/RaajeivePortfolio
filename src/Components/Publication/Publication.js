import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#e9ecef",
    // minHeight: "100vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  },
  paper: {
    padding: "10px",
    background: "#e9ecef",
    // minHeight: "100vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    minHeight: "75vh",
    maxHeight: "75vh",
    overflowY: "scroll",
  },
}));

const Publication = (props) => {
  const classes = useStyles();
  const publicationData = props.publication;
  return (
    <Box id="publication">
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h2" style={{ fontFamily: "Trocchi" }}>
          Publications
        </Typography>
        <Grid container justify="flex-start" spacing={2}>
          {publicationData.map((publication) => (
            <Grid
              style={{
                marginInline: "10%",
              }}
              item
              xs={12}
              key={publication.id}
            >
              <List
                style={{
                  textAlign: "left",
                  width: "100%",
                  padding: "0px",
                }}
              >
                <ListItem style={{ margin: "0px", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        style={{ padding: "0px", fontFamily: "Lato" }}
                      >
                        {publication.title}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {publication.publisher}
                        </Typography>
                        {" -    " + publication.authors.join(", ")}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href={publication.url}
                  size="small"
                  style={{ marginLeft: "15px", marginBottom: "5px" }}
                >
                  Details
                </Button>
                {publication.file_location &&
                publication.file_location !== "" ? (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={publication.file_location}
                    target="_blank"
                    download
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: "5px", marginBottom: "5px" }}
                    >
                      PDF
                    </Button>
                  </Link>
                ) : (
                  ""
                )}
                <Divider component="li"></Divider>
              </List>
              {/* </Paper> */}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Publication;
