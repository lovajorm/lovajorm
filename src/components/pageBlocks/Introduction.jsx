import React from "react";
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from "react-intersection-observer";

function Introduction() {
  // const ref = useRef()
  // const isVisible = useOnScreen(ref)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="outer">
      <div className="introduction-container">
        <h2>Introduction</h2>
        <div ref={ref}>
          <div className={inView ? "introduction-inner" : ""}>
            <div className="inner">
              <div className="text">
                <div>
                  My name is Lova and I'm a webdeveloper. I work a nine to five
                  job as a software engineer at a big company in Sweden. I do
                  however have a huge passion for webdevelopment and work a lot
                  at my own projects and have had a few freelance jobs.
                </div>
                <br />
                <div>
                  If you have any interest in any work for your website,
                  webapplication, frontend, backend or just some consulting
                  even. Don't hesitate to contact me as I am happy to help.
                </div>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lova-jormfeldt-24444a117/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    height="35px"
                    width="35px"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
