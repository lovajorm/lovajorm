import React, { useState, useEffect } from "react";
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from "react-intersection-observer";

function Techniques() {
  // const ref = useRef()
  // const isVisible = useOnScreen(ref)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);
  return (
    <div className="outer">
      <div className="techniques-container">
        <div
          className={
            inView
              ? "techniques-headings child visible"
              : "techniques-headings child"
          }
        >
          <h2>What I offer</h2>
          {!isMobile && <h2>Techniques</h2>}
        </div>
        <div ref={ref}>
          <div className={inView ? "techniques-inner" : ""}>
            {isMobile && (
              <h2
                className={
                  inView
                    ? "techniques-heading child visible"
                    : "techniques-heading child"
                }
              >
                Techniques
              </h2>
            )}
            <div className="inner">
              {isMobile ? (
                <>
                  <div className="text">
                    I build websites and web applications and work with a
                    variety of different languages, platforms and frameworks
                  </div>
                  <div className="logos-platforms">
                    <div>
                      <img
                        className="google"
                        src="img/techniques/google-cloud-seeklogo.svg"
                        alt="googlecloud logo"
                      />
                    </div>
                    <div className="azure">
                      <img
                        className="azure"
                        src="img/techniques/microsoft-azure-seeklogo.com.svg"
                        alt="microsoftazure logo"
                      />
                    </div>
                  </div>
                  <div className="logos">
                    <img
                      className="logo sql"
                      src="img/techniques/microsoft-sql-server-seeklogo.com.svg"
                      alt="sql server logo"
                    />
                    <img
                      className="logo vs"
                      src="img/techniques/microsoft-visual-studio-seeklogo.com.svg"
                      alt="visual studio logo"
                    />
                  </div>
                  <div className="logos">
                    <img
                      className="logo"
                      src="img/techniques/c-sharp-c-seeklogo.com.svg"
                      alt="csharp logo"
                    />
                    <img
                      className="logo"
                      src="img/techniques/react-seeklogo.com.svg"
                      alt="react logo"
                    />
                  </div>
                  <div className="logos">
                    <img
                      className="logo"
                      src="img/techniques/typescript-seeklogo.com.svg"
                      alt="typescript logo"
                    />
                    <img
                      className="logo"
                      src="img/techniques/firebase-seeklogo.com.svg"
                      alt="firebase logo"
                    />
                  </div>
                  <div className="logos">
                    <img
                      className="logo"
                      src="img/techniques/css3.svg"
                      alt="css logo"
                    />
                    <img
                      className="logo"
                      src="img/techniques/html5-seeklogo.svg"
                      alt="html logo"
                    />
                  </div>
                  <div className="logos">
                    <img
                      className="logo"
                      src="img/techniques/javascript-js-seeklogo.com.svg"
                      alt="javascript logo"
                    />
                    <img
                      className="logo"
                      src="img/techniques/svelte-seeklogo.com.svg"
                      alt="svelte logo"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col">
                    <div className="text">
                      I build websites and web applications and work with a
                      variety of different languages, platforms and frameworks
                    </div>
                    <div className="logos-platforms">
                      <div>
                        <img
                          className="logo"
                          src="img/techniques/google-cloud-seeklogo.svg"
                          alt="googlecloud logo"
                        />
                        <img
                          className="logo sql"
                          src="img/techniques/microsoft-sql-server-seeklogo.com.svg"
                          alt="sql server logo"
                        />
                      </div>
                      <div className="azure">
                        <img
                          className="logo azure"
                          src="img/techniques/microsoft-azure-seeklogo.com.svg"
                          alt="microsoftazure logo"
                        />
                        <img
                          className="logo vs"
                          src="img/techniques/microsoft-visual-studio-seeklogo.com.svg"
                          alt="visual studio logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="logos">
                      <img
                        className="logo"
                        src="img/techniques/c-sharp-c-seeklogo.com.svg"
                        alt="csharp logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/react-seeklogo.com.svg"
                        alt="react logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/typescript-seeklogo.com.svg"
                        alt="typescript logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/firebase-seeklogo.com.svg"
                        alt="firebase logo"
                      />
                    </div>
                    <div className="logos">
                      <img
                        className="logo"
                        src="img/techniques/css3.svg"
                        alt="css logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/html5-seeklogo.svg"
                        alt="html logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/javascript-js-seeklogo.com.svg"
                        alt="javascript logo"
                      />
                      <img
                        className="logo"
                        src="img/techniques/svelte-seeklogo.com.svg"
                        alt="svelte logo"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techniques;
