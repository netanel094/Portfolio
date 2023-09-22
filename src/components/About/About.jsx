import React, { useEffect, useState } from "react";
import "./About.css";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
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
    <section id="about">
      <div
        className={`text-secondary py-3 text-center ${
          isVisible ? "fade-in-down" : ""
        }`}
      >
        <div className="py-5">
          <h1 className="display-2 fw-bold text-black">About me</h1>
          <div className="col-lg-9 mx-auto">
            <p className="fs-6 mb-5">
              <strong>
                Former intelligence analyst at 8200 Unit holding a B.Sc for
                Computer Science.
              </strong>
              <br />A strong team player, have excellent problem-solving skills
              and can handle multiple tasks simultaneously. Have a natural
              tendency to learn fast and have a real passion for keeping up to
              date with the latest industry trends and technologies.
              <strong>
                <br />
                I'm eager to grow in the development field.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
