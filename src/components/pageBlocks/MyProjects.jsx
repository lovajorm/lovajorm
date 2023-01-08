import React from "react";
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from "react-intersection-observer";

function MyProjects() {
  // const ref = useRef()
  // const isVisible = useOnScreen(ref)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="myprojects-outer">
      <div className="outer">
        <div className="myprojects-container">
          <h2>My projects</h2>
          <div ref={ref}>
            <div
              className={
                inView
                  ? "myprojects-inner myprojects-no-border"
                  : "myprojects-no-border"
              }
            >
              <div className="inner">
                <div className="projects">
                  <div className="col">
                    <div className="text">
                      For Gute Glass I have done a static webpage in pure html,
                      css and javascript.
                    </div>
                    <a
                      href="https://www.guteglass.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inner project">
                        <img
                          className=""
                          src="img/projects/GG_Logo_2019_GG.svg"
                          alt="guteglass"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    <div className="text">
                      For Gute Glass I have also done a webapplication, should
                      preferably be viewd on a mobile device. Front-end is done
                      in React, with a .NET core api in the back. Firebase
                      authentication and google cloud storage and hosting.
                    </div>
                    <a
                      href="https://mjukglassbaren.guteglass.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inner project">
                        <img
                          className=""
                          src="img/projects/mjukglassbaren-logo 1.svg"
                          alt="mjukglassbaren"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
