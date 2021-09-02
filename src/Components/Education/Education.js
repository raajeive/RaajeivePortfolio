import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { GiNewBorn } from "react-icons/gi";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: "#303f4a",
    // background: "#757F9A",
    // background: "-webkit-linear-gradient(to right, #D7DDE8, #757F9A)",
    background: "linear-gradient(to right, #D7DDE8, #757F9A)",
  },
  paper: {
    padding: "10px",
    margin: "10px",
  },
  Typography: {
    color: "white",
    fontFamily: "Trocchi",
  },
}));

const Education = (props) => {
  const classes = useStyles();
  const education = props.education;

  return (
    <Box className={classes.root} id="education">
      <Container maxWidth="lg">
        {/* <Paper elevation={3}> */}
        <Typography variant="h2" className={classes.Typography}>
          Education
        </Typography>
        <VerticalTimeline layout={"2-columns"} animate={true}>
          {education.map((education_record, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                iconStyle={{
                  background: "rgb(233, 30, 99)",
                  color: "#fff",
                }}
                icon={<FaUniversity />}
              >
                <h3 className="vertical-timeline-element-title">
                  {education_record.Degree}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {education_record.specialization +
                    ", " +
                    education_record.UniversityName}
                </h4>
                <p>{education_record.Description}</p>
                <b
                  className="vertical-timeline-element-date"
                  style={{ fontWeight: 700 }}
                >
                  {education_record.Duration}
                </b>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<GiNewBorn />}
          />
        </VerticalTimeline>
        {/* </Paper> */}
      </Container>
    </Box>
  );
};

export default Education;
