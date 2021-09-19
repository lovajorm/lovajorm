import React from 'react'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-inner inner'>
                <h2>Contact</h2>
                <div className='text'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
    )
}

export default Contact
