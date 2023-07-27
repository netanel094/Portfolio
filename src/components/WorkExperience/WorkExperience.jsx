import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./WorkExperience.css";
import { StyledTitle } from "../Global.styled";
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "left",
    padding: "6px 16px",
    backgroundColor: "#468B97",
    opacity: 0,
    animation: "fade-in-down 1s ease-in-out forwards",
    "&:hover": {
      backgroundColor: "#58A7C1",
    },
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("workExperience");
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="workExperience">
      <StyledTitle
        className={`workExperience-Title ${isVisible ? "fade-in-down" : ""}`}
      >
        Work experience
      </StyledTitle>
      <div
        className={`workexperience-container ${
          isVisible ? "fade-in-down" : ""
        }`}
      >
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2">2022-2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="customTimelineContent">
              <Paper
                elevation={5}
                className={`${classes.paper} customPaperRoot`}
              >
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
              <Typography variant="body2">2021-2022</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={5}
                className={`${classes.paper} customPaperRoot`}
              >
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
              <Typography variant="body2">2016-2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={5}
                className={`${classes.paper} customPaperRoot`}
              >
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.boldText}
                >
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
