import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./WorkExperience.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: "#468B97",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  boldText: {
    fontWeight: "bold",
  },
}));

export default function WorkExperience() {
  const classes = useStyles();

  return (
    <section id="workExperience">
      <div className="workexperience-container">
        <h1 className="workExperience-Title">Work experience</h1>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="black ">
                2022-2023
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.boldText}
                >
                  Instructor – Leaders App
                </Typography>
                <Typography>
                  • Provided instruction and mentorship to middle and high
                  school students at Mamram. <br></br> • Taught Java, C#, and
                  Python
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="black">
                2021-2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.boldText}
                >
                  Data Analyst (Tagger) - Voyager Labs company
                </Typography>
                <Typography>
                  I was part of a team that built complex algorithms for machine
                  learning and classification. Responsible for understanding the
                  needs of the team, procuring, processing and analyzing the
                  Relevant information from various sources.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="black">
                2021-2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  8200 Unit - Intelligence Analyst
                </Typography>
                <Typography>
                  • Responsible for intelligence data analysis under pressure
                  that directly influenced the decision-making of the cabinet
                  and Ministry of Defense.<br></br> • Analyzed critical
                  intelligence creatively and outside the box for Israel's
                  security. <br></br>• Used various technological tools for data
                  mining.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
