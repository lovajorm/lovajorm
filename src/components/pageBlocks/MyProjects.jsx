import React from 'react'

function MyProjects() {
    return (
        <div className='myprojects-outer'>
            <div className='myprojects-container'>
                <div className='myprojects-inner inner'>
                    <h2>My projects</h2>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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
                                    src='img/guteglass.jpg'
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
                                    src='img/mjukglassbaren.jpg'
                                    alt='mjukglassbaren'
                                />
                            </div>
                        </a>
                        {/* <a href='' target='_blank' rel='noopener noreferrer'>
                            <div className='inner'></div>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects
