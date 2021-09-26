import React, { useRef } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function Contact() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return (
        <div className='outer'>
            <div className='contact-container'>
                <h2>Contact</h2>
                <div ref={ref}>
                    <div className={isVisible ? 'contact-inner' : ''}>
                        <div className='inner'>
                            <div className='text'>
                                If you're interested in any of my work please
                                don't hesitate to contact me
                            </div>
                            <form>
                                <div className='form-control'>
                                    <input type='text' placeholder='Email' />
                                </div>
                                <div className='form-control'>
                                    <textarea placeholder='Message...'></textarea>
                                </div>
                                <div className='form-control btn'>
                                    <input type='submit' value='Send' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
