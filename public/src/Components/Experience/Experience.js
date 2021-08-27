import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Button from "@material-ui/core/Button";
import ModalInfo from "./ModalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#303f4a",
    paddingBottom: "0px !important",
    maxWidth: "none",
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

const Experience = (props) => {
  const classes = useStyles();
  const experience = props.experience;

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root} id="experience">
      <ModalInfo data={data} open={open} handleClose={handleClose}></ModalInfo>
      <Typography variant="h2" className={classes.Typography}>
        Experience
      </Typography>
      <VerticalTimeline layout={"2-columns"} animate={false}>
        {experience.map((experience_record, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience_record.Designation}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience_record.CompanyName +
                  " - " +
                  experience_record.UnitName}
              </h4>
              <p>{experience_record.Description}</p>
              <b
                className="vertical-timeline-element-date"
                style={{ color: "#3282FA", fontWeight: 700 }}
              >
                {experience_record.From + " - " + experience_record.To}
              </b>
              <Button
                onClick={() => {
                  setData(experience_record);
                  setOpen(true);
                }}
                target="_blank"
                size="small"
                variant="outlined"
                color="primary"
              >
                More INFO
              </Button>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaLaptopCode />}
        />
      </VerticalTimeline>
      {/* </Paper> */}
    </Box>
  );
};

export default Experience;
