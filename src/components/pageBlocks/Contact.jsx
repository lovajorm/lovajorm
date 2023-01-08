import React from "react";
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

function Contact() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // const ref = useRef()
  // const isVisible = useOnScreen(ref)

  const [state, handleSubmit] = useForm("mzbqbkpa");

  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setValues({
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <div className="outer">
      <div className="contact-container">
        <h2>Contact</h2>
        <div ref={ref}>
          <div className={inView ? "contact-inner" : ""}>
            <div className="inner">
              <div className="text">
                If you're interested in any of my work please don't hesitate to
                contact me
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                  {/* <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  /> */}
                </div>
                <div className="form-control">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                    value={values.message}
                    onChange={(e) =>
                      setValues({ ...values, message: e.target.value })
                    }
                  />
                  {/* <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  /> */}
                </div>
                <div className="form-control btn">
                  <input type="submit" value="Send" />
                </div>
              </form>
              {state.succeeded && (
                <div className="text success">
                  Thanks for your message! I will get back to you as soon as
                  possible
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
