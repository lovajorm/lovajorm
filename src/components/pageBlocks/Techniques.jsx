import React, { useRef, useState, useEffect } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function Techniques() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [width, setWidth] = useState(window.innerWidth)
    const [isMobile, setIsMobile] = useState()

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    useEffect(() => {
        setIsMobile(width <= 768)
    }, [width])
    return (
        <div className='techniques-container'>
            <div className='techniques-headings'>
                <h2>What I offer</h2>
                {!isMobile && <h2>Techniques</h2>}
            </div>
            <div ref={ref}>
                <div className={isVisible ? 'techniques-inner' : ''}>
                    {isMobile && (
                        <h2 className='techniques-heading'>Techniques</h2>
                    )}
                    <div className='inner'>
                        <div className='col'>
                            <div className='text'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </div>
                            <div className='logos-platforms'>
                                <img
                                    className='logo'
                                    src='img/techniques/google-cloud-seeklogo.svg'
                                    alt='googlecloud'
                                />
                                <img
                                    className='logo'
                                    src='img/techniques/microsoft-azure-seeklogo.com.svg'
                                    alt='microsoftazure'
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='logos'>
                                <img
                                    className='logo'
                                    src='img/techniques/c-sharp-c-seeklogo.com.svg'
                                    alt='csharp'
                                />
                                <img
                                    className='logo'
                                    src='img/techniques/react-seeklogo.com.svg'
                                    alt='react'
                                />
                                <img
                                    className='logo'
                                    src='img/techniques/typescript-seeklogo.com.svg'
                                    alt='typescript'
                                />
                            </div>
                            <div className='logos'>
                                <img
                                    className='logo'
                                    src='img/techniques/css3.svg'
                                    alt='css'
                                />
                                <img
                                    className='logo'
                                    src='img/techniques/html5-seeklogo.svg'
                                    alt='html'
                                />
                                <img
                                    className='logo'
                                    src='img/techniques/javascript-seeklogo.svg'
                                    alt='javascript'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techniques
