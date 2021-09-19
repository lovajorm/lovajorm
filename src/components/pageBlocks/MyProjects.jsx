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
                            <div className='text'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </div>
                            <div className='projects'>
                                <a
                                    href='https://www.guteglass.se/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <div className='inner'>
                                        <img
                                            className=''
                                            src='img/projects/GG_Logo_2019_GG.svg'
                                            alt='guteglass'
                                        />
                                    </div>
                                </a>
                                <a
                                    href='https://mjukglassbaren.guteglass.se/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <div className='inner'>
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
    )
}

export default MyProjects
