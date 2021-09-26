import React, { useRef } from 'react'
import { useOnScreen } from '../hooks/CustomHooks'

function MyProjects() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <div className='myprojects-outer'>
            <div className='myprojects-container'>
                <h2>My projects</h2>
                <div ref={ref}>
                    <div className={isVisible ? 'myprojects-inner' : ''}>
                        <div className='inner'>
                            <div className='projects'>
                                <div className='col'>
                                    <div className='text'>
                                        For Gute glass I have done a static
                                        webpage in pure html, css and
                                        javascript.
                                    </div>
                                    <a
                                        href='https://www.guteglass.se/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <div className='inner project'>
                                            <img
                                                className=''
                                                src='img/projects/GG_Logo_2019_GG.svg'
                                                alt='guteglass'
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className='col'>
                                    <div className='text'>
                                        For Gute glass I have also done a
                                        webapplication, should preferably be
                                        viewd on a mobile device. Front-end is
                                        done in React, with a .NET core api in
                                        the back. Firebase authentication and
                                        google cloud storage and hosting.
                                    </div>
                                    <a
                                        href='https://mjukglassbaren.guteglass.se/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <div className='inner project'>
                                            <img
                                                className=''
                                                src='img/projects/GG-mjukglassbaren-logo.svg'
                                                alt='mjukglassbaren'
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects
