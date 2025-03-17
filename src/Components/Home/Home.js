import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  Typography: {
    fontWeight: "300",
    lineHeight: 1.2,
    color: "black",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    margin: 0,
    padding: "0px 0px 6px 0px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  button: {
    color: "black",
    border: "1px solid black",
    padding: "14px 28px",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      color: "black",
      backgroundColor: "darkseagreen",
      border: "1px solid black",
    },
  },
  faButton: {
    color: "black",
    padding: "5px 5px",
    fontSize: "40px",
    "&:hover": { color: "black" },
  },
  headTypography: {
    fontWeight: "300",
    lineHeight: 1.2,
    color: "black",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    margin: 0,
    marginTop: "40px",
    padding: "0px 0px 6px 0px",
  },
}));

const myScrollFunc = function (ele) {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 40,
    behavior: "smooth",
  });
};

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

const Home = (props) => {
  const classes = useStyles();
  console.log("Props - Home.js", props.about);
  const about = props.about;
  return (
    <Box id="home">
      <Box className={classes.root}>
        <Typography className={classes.headTypography} variant="h4">
          Hi there 👋, I'm {about.name}
        </Typography>
        <Typography className={classes.Typography} variant="h5">
          {about.role} @{about.currentCompany}
        </Typography>
        <Typography className={classes.Typography} variant="h5">
          <span style={{ visibility: "hidden" }}>!</span>
          <span
            className="txt-rotate"
            data-period="1000"
            data-rotate={about.aboutDataRotate}
          ></span>
        </Typography>
        <Box>
          <IconButton href={about.socialLinks.email} size="medium">
            <FiMail className={classes.faButton}></FiMail>
          </IconButton>
          <IconButton href={about.socialLinks.github} size="medium">
            <FaGithub href="#" className={classes.faButton}></FaGithub>
          </IconButton>
          <IconButton href={about.socialLinks.linkedin} size="medium">
            <FaLinkedin className={classes.faButton}></FaLinkedin>
          </IconButton>
          <IconButton href={about.socialLinks.instagram} size="medium">
            <FaInstagram className={classes.faButton}></FaInstagram>
          </IconButton>
        </Box>
        <Box>
          <Button
            variant="outlined"
            size="large"
            className={classes.button}
            onClick={() => {
              myScrollFunc("about");
            }}
            startIcon={<FaAngleDoubleDown></FaAngleDoubleDown>}
          >
            More About Me!
          </Button>
        </Box>
        {/* <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Home;
