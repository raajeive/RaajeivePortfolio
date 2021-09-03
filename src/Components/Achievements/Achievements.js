import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
  divAchievements: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "no-wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  Typography: {
    fontFamily: "Trocchi",
    alignSelf: "left",
    fontWeight: "400",
  },
}));

const Achievements = (props) => {
  const classes = useStyles();

  if (props.achievements.length == 0) {
    return null;
  } else {
    return (
      <Box className={classes.root} id="courses">
        <Typography
          variant="h4"
          style={{
            fontFamily: "Trocchi",
          }}
        >
          Achievements
        </Typography>
        <hr
          style={{
            width: "50%",
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "0px",
            opacity: "0.6",
          }}
        ></hr>
        <Box className={classes.divAchievements}>
          <List
            style={{
              textAlign: "left",
              width: "100%",
              padding: "0px",
            }}
          >
            {props.achievements.map((achievement, index) => {
              return (
                <div key={index}>
                  <ListItem
                    alignItems="flex-start"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    {/* <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon> */}
                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          style={{ padding: "0px", fontFamily: "Lato" }}
                        >
                          {achievement.award +
                            " -    " +
                            achievement.org +
                            "  (" +
                            achievement.date +
                            ")"}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {achievement.description}
                          </Typography>
                          <Divider></Divider>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </Box>
      </Box>
    );
  }
};

export default Achievements;
