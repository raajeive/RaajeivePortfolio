import React, { useState } from "react";
import { FaCode, FaReact, FaStar, FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
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
  button: {
    color: "white",
    textDecoration: "none",
    "&:hover": { color: "lightskyblue" },
  },
  faButton: {
    color: "white",
    padding: "5px 5px",
    fontSize: "30px",
    "&:hover": { color: "lightskyblue" },
  },
}));

const myScrollFunc = function (ele) {
  let offsetTop = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop - 40,
    behavior: "smooth",
  });
};

const Footer = (props) => {
  const [bgStyle] = useState({
    backgroundColor: "#343a40",
    minHeight: "25vh",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "18px",
  });
  const name = props.name;
  const link = props.link;
  const social_links = props.social_links;
  const message = props.message;
  const classes = useStyles();

  return (
    <footer style={bgStyle} className="footer">
      <div>
        <Typography
          style={{ paddingTop: "10%", paddingBottom: "10%" }}
          variant="h4"
        >
          {" "}
          Get in Touch!
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            paddingInline: "10%",
          }}
        >
          {message} Please feel free to email me at:{" "}
          <a
            className={classes.button}
            rel="noopener"
            href={social_links.email}
            aria-label="My Email"
          >
            {social_links.email.replace("mailto:", "")}
          </a>
        </Typography>
      </div>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <AiOutlineCopyrightCircle className="react-icons"></AiOutlineCopyrightCircle>{" "}
        Copyright 2020
      </div>
      <div>
        <FaCode size={25} className="react-icons"></FaCode>
        by{" "}
        <a
          className={classes.button}
          rel="noopener"
          href={link}
          aria-label="My GitHub"
        >
          <b>{name}</b>
        </a>{" "}
        using <FaReact size={25} className="react-icons"></FaReact>{" "}
        {/* <Link
          to={""}
          onClick={() => {
            myScrollFunc("navbar");
          }}
          style={{ color: "white" }}
        >
          Scroll to Top!{" "}
        </Link>{" "}
        <FaArrowAltCircleUp className="react-icons"></FaArrowAltCircleUp> */}
        <Box>
          <IconButton href={social_links.email} size="small">
            <FiMail className={classes.faButton}></FiMail>
          </IconButton>
          <IconButton href={social_links.github} size="small">
            <FaGithub href="#" className={classes.faButton}></FaGithub>
          </IconButton>
          <IconButton href={social_links.linkedin} size="small">
            <FaLinkedin className={classes.faButton}></FaLinkedin>
          </IconButton>
          <IconButton href={social_links.instagram} size="small">
            <FaInstagram className={classes.faButton}></FaInstagram>
          </IconButton>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
