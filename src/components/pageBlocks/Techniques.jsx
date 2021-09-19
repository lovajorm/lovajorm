import React from 'react'

function Techniques() {
    return (
        <div className='techniques-container'>
            <div className='techniques-inner inner'>
                <div className='col'>
                    <h2>What I offer</h2>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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
                    <h2>Techniques</h2>
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
    )
}

export default Techniques
