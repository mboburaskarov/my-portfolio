import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Front-end Developer",
        "Graphic Designer",
        "Content Creator",
        "Programmer",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagecontainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Assalamu aleykum, I'm</h2>
          <h1>Askarov MuhammadBobur</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#contact" className="button">
            Contact me
          </a>
        </div>

        <a href="#portfolio" className="down">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
