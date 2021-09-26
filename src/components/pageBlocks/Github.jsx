import React, { useRef } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function Github() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <div ref={ref}>
            {isVisible && (
                <div className='github-container'>
                    <a
                        href='https://github.com/lovajorm'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div ref={ref}>
                            <div
                                className={isVisible ? 'github-inner' : ''}
                            ></div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Github
