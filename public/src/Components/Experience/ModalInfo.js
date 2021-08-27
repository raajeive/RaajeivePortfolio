import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Modal, Box } from "@material-ui/core";
import { FaCircle } from "react-icons/fa";
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  Divider,
  FormControl,
  Input,
  CardMedia,
  CardContent,
  Typography,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import color from "@material-ui/core/colors/lightBlue";
import { green } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const tabtheme = createMuiTheme({
  MuiTableCell: { padding: "0px" },
});

const styles = (theme) => ({
  paper: {
    position: "absolute",
    width: window.innerWidth < 600 ? "90%" : "50%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    borderRadius: 10,
    outline: "none",
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class Modalform extends Component {
  state = {};
  render() {
    console.log("info ", this.props);
    const { classes } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Box style={{ height: "60vh", overflowY: "scroll" }}>
            <Typography
              component="div"
              style={{ textAlign: "center", alignSelf: "center" }}
            >
              <Box fontWeight="fontWeightBold" m={1}>
                {this.props.data.Designation}
              </Box>
              <Box fontWeight="fontWeightBold" m={1}>
                {this.props.data.CompanyName + " - " + this.props.data.UnitName}
              </Box>
            </Typography>
            <Divider variant="middle" />
            <Typography>{this.props.data.Description}</Typography>

            <List component="nav" aria-labelledby="nested-list-subheader">
              {this.props.data.Points
                ? this.props.data.Points.map((point, key) => {
                    return (
                      <ListItem key={key} button>
                        <ListItemIcon>
                          <FaCircle />
                        </ListItemIcon>
                        <ListItemText primary={point} />
                      </ListItem>
                    );
                  })
                : ""}
            </List>
          </Box>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(Modalform);
