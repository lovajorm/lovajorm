import React from 'react'
//import { useOnScreen } from '../hooks/CustomHooks'
import { useInView } from 'react-intersection-observer'

function Github() {
    // const ref = useRef()
    // const isVisible = useOnScreen(ref)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    })

    return (
        <div className='outer'>
            <div className='github-container'>
                <a
                    href='https://github.com/lovajorm'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div ref={ref}>
                        <div
                            className={
                                inView
                                    ? 'github-inner github-no-border'
                                    : 'github-no-border'
                            }
                        ></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Github
