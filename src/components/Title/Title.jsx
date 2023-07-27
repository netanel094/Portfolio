import React, { useEffect, useState } from "react";
import "./Title.css";
import { StyledTitle } from "../Global.styled";

export default function Title() {
  const [typedName, setTypedName] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const myName = "Netanel Yomtovian";
  const mySubtitle = "A full-stack developer";
  const typingSpeed = 100;
  useEffect(() => {
    let currentName = "";
    let currentSubtitle = "";
    let currentIndexName = 0;
    let currentIndexSubtitle = 0;

    const typingNameInterval = setInterval(() => {
      if (currentIndexName < myName.length) {
        currentName += myName[currentIndexName];
        setTypedName(currentName);
        currentIndexName++;
      } else {
        clearInterval(typingNameInterval);

        const typingSubtitleInterval = setInterval(() => {
          if (currentIndexSubtitle < mySubtitle.length) {
            currentSubtitle += mySubtitle[currentIndexSubtitle];
            setTypedSubtitle(currentSubtitle);
            currentIndexSubtitle++;
          } else {
            clearInterval(typingSubtitleInterval);
          }
        }, typingSpeed);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingNameInterval);
    };
  }, []);

  const DownloandMyResume = () => {
    window.open(`${process.env.PUBLIC_URL}/newResume.pdf`, "_blank");
  };

  const GithubLink = () => {
    window.location.href = "https://github.com/netanel094";
  };

  return (
    <section id="title">
      <div className="title text-center">
        <StyledTitle>{typedName}</StyledTitle>
        <div className="col-lg-6 mx-auto">
          <h2 className="display-5 fw">{typedSubtitle}</h2>
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={DownloandMyResume}
            >
              <img
                src="/images/resume.png"
                width={"30"}
                height={"30"}
                alt="Resume"
              ></img>{" "}
              My resume
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={GithubLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="githubText">Github</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
