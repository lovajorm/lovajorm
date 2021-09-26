import React, { useRef } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function Github() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <div ref={ref} className='outer'>
            {isVisible && (
                <div className='github-container'>
                    <a
                        href='https://github.com/lovajorm'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div ref={ref}>
                            <div
                                className={
                                    isVisible
                                        ? 'github-inner github-no-border'
                                        : 'github-no-border'
                                }
                            ></div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Github
