import React, { useRef } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function Introduction() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <div className='outer'>
            <div className='introduction-container'>
                <h2>Introduction</h2>
                <div ref={ref}>
                    <div className={isVisible ? 'introduction-inner' : ''}>
                        <div className='inner'>
                            <div className='text'>
                                <div>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </div>
                                <br />
                                <div>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </div>
                                <br />
                                <div>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
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
