import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import { StyledTitle } from "../Global.styled";

export default function WorkExperience() {
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
    <Section id="workExperience">
      <Title className={isVisible ? "fade-in-down" : ""}>Work experience</Title>
      <TimelineWrapper className={isVisible ? "fade-in-down" : ""}>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <TimelineItemDate>
                <DateText>Feb 2024 - Present</DateText>
              </TimelineItemDate>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="customTimelineContent">
              <StyledPaper elevation={5} className={`customPaperRoot`}>
                <CardTitle className="boldText">
                  Software Engineer - Deepvoid
                </CardTitle>
                <CardText>
                  • Designed and developed end-to-end scalable backend systems
                  in Python, with a focus on performance, concurrency, and
                  maintainability
                  <br></br> • Built and maintained RESTful APIs using FastAPI to
                  support seamless communication between frontend and backend
                  services
                  <br></br> • Implemented multiprocessing and asynchronous
                  programming to build a high-performance data pipeline,
                  significantly improving system throughput and responsiveness
                  <br></br> • Designed relational schemas and managed data using
                  PostgreSQL and SQLAlchemy
                  <br></br> • Wrote technical documentation and ran performance
                  benchmarks to guide system design and ensure architecture
                  supported scalability goals
                  <br></br> • Used Git, Linux, and Docker for version control,
                  environment setup, and deployment workflows
                  <br></br> • Utilized Telethon to interface with the Telegram
                  API, identifying and strategically leveraging system
                  limitations to enhance application performance
                </CardText>
              </StyledPaper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <TimelineItemDate>
                <DateText>2022-2023</DateText>
              </TimelineItemDate>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="customTimelineContent">
              <StyledPaper elevation={5} className={`customPaperRoot`}>
                <CardTitle className="boldText">
                  Instructor – Leaders App
                </CardTitle>
                <CardText>
                  • Provided instruction and mentorship to middle and high
                  school students at Mamram. <br></br> • Taught Java, C#, and
                  Python
                </CardText>
              </StyledPaper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <TimelineItemDate>
                <DateText>2021-2022</DateText>
              </TimelineItemDate>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledPaper elevation={5} className={`customPaperRoot`}>
                <CardTitle className="boldText">
                  Data Analyst (Tagger) - Voyager Labs company
                </CardTitle>
                <CardText>
                  I was part of a team that built complex algorithms for machine
                  learning and classification. Responsible for understanding the
                  needs of the team, procuring, processing and analyzing the
                  Relevant information from various sources.
                </CardText>
              </StyledPaper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <TimelineItemDate>
                <DateText>2016-2019</DateText>
              </TimelineItemDate>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledPaper elevation={5} className={`customPaperRoot`}>
                <CardTitle className="boldText">
                  8200 Unit - Intelligence Analyst
                </CardTitle>
                <CardText>
                  • Responsible for intelligence data analysis under pressure
                  that directly influenced the decision-making of the cabinet
                  and Ministry of Defense.
                  <br></br> • Analyzed critical intelligence creatively and
                  outside the box for Israel's security. <br></br>• Used various
                  technological tools for data mining.
                </CardText>
              </StyledPaper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineWrapper>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.backgroundGradient};
  min-height: 100vh;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(StyledTitle)`
  font-size: 2.5rem;
  font-weight: bold;
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 36px;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0 0 32px 0;
  margin: 0 auto;
`;

// עיצוב חדש לכל כרטיס Paper
const StyledPaper = styled(Paper)`
  background: ${colors.cardBackground} !important;
  border-radius: 28px !important;
  box-shadow: ${colors.cardShadow} !important;
  padding: 36px 64px 28px 64px !important;
  margin: 0 auto 32px auto !important;
  max-width: 1200px;
  width: 100%;
  transition: box-shadow 0.2s, background 0.2s;
  opacity: 0.98;
  direction: ltr;
  text-align: center;
  ul {
    direction: ltr;
    text-align: left;
    margin: 0 0 0 24px;
    padding: 0 0 0 24px;
  }
`;

// עיצוב כותרת בתוך הכרטיס
const CardTitle = styled.h1`
  font-size: 1.45rem;
  font-weight: bold;
  color: ${colors.primary};
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  direction: ltr;
  text-align: center;
`;

// עיצוב טקסט בתוך הכרטיס
const CardText = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 0px;
  direction: ltr;
  text-align: center;
  ul {
    direction: ltr;
    text-align: left;
    margin: 0 0 0 24px;
    padding: 0 0 0 24px;
  }
`;

const TimelineItemDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  margin-top: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 24px;
  z-index: 2;
`;

const DateText = styled.span`
  background: ${colors.textGradient};
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 16px;
  padding: 7px 22px;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
  letter-spacing: 1px;
  margin-bottom: 0;
  margin-top: 0;
  display: inline-block;
`;
