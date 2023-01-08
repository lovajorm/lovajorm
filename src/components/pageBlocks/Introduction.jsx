import React from 'react'
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from 'react-intersection-observer'

function Introduction() {
    // const ref = useRef()
    // const isVisible = useOnScreen(ref)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    })
    return (
        <div className='outer'>
            <div className='introduction-container'>
                <h2>Introduction</h2>
                <div ref={ref}>
                    <div className={inView ? 'introduction-inner' : ''}>
                        <div className='inner'>
                            <div className='text'>
                                <div>
                                    My name is Lova and my nine to five job is
                                    as a systemdeveloper at i big company in
                                    Sweden. I do however have a huge passion for
                                    webdevelopment and work a lot at my own
                                    projects and doin some frilans jobs.
                                </div>
                                <br />
                                <div>
                                    If you have any interest in any work for
                                    your website, webapplication, frontend,
                                    backend or just some consulting even. Don't
                                    hesitate to contact me I am happy to help.
                                </div>
                                <br />
                                <div>
                                    Take a look down my site, look at my work.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
