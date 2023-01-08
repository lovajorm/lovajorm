import React from "react";

function Intro() {
  return (
    <div className="intro">
      {/* <div class='container'>
                <svg viewBox='0 0 600 300'>
                    <symbol id='s-text'>
                        <text
                            text-anchor='middle'
                            x='50%'
                            y='50%'
                            dy='.35em'
                            class='text--line'
                        >
                            Lova Jormfeldt
                        </text>
                    </symbol>

                    <clippath id='cp-text'>
                        <text
                            text-anchor='middle'
                            x='50%'
                            y='50%'
                            dy='.35em'
                            class='text--line'
                        >
                            Lova Jormfeldt
                        </text>
                    </clippath>

                    <g clip-path='url(#cp-text)'>
                        <rect
                            width='100%'
                            height='100%'
                            class='anim-shape'
                        ></rect>
                        <rect
                            width='95%'
                            height='100%'
                            class='anim-shape'
                        ></rect>
                        <rect
                            width='90%'
                            height='100%'
                            class='anim-shape'
                        ></rect>
                        <rect
                            width='85%'
                            height='100%'
                            class='anim-shape'
                        ></rect>
                        <rect
                            width='80%'
                            height='100%'
                            class='anim-shape'
                        ></rect>
                    </g>

                    <use xlinkHref='#s-text' class='text--transparent'></use>
                </svg>
            </div> */}
      <div className="copy">
        <h1>Lova Jormfeldt</h1>
        <div>Web developer</div>
        {/* <div>I live in Sweden and work as a system developer at a bank and I like to do freelans jobs at my spare time so if you're interested in design, web or app development don't hesitate to contact me.</div> */}
      </div>
      <img src="img/lovalogo-blackbg.png" alt="logo" width="75px" />
    </div>
  );
}

export default Intro;
