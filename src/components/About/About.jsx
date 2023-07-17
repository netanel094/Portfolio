import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="text-secondary py-3 text-center">
        <div className="py-5">
          <h1 className="display-2 fw-bold text-black fade-in-down">
            About me
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 fade-in-down">
              <strong>
                An Intelligence Analyst from 8200 Unit, bachelor's degree in
                computer science.
              </strong>
              <br />A strong team player, have excellent problem-solving skills
              and can handle multiple tasks simultaneously. Have a natural
              tendency to learn fast and have a real passion for keeping up to
              date with the latest industry trends and technologies. Eager to
              grow in the development field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
