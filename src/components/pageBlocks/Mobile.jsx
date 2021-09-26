import React from 'react'
import Intro from '../pageBlocks/Intro'
import Contact from './Contact'
import Github from './Github'
import Introduction from './Introduction'
import MyProjects from './MyProjects'
import Techniques from './Techniques'

function Mobile() {
    return (
        <div className='mobile'>
            <Intro />
            <Introduction />
            <div className='blueprint-1'></div>
            <Techniques />
            {/* <img className='blueprint-2' src='img/black.png' alt='blueprint' /> */}
            <Github />
            <MyProjects />
            <Contact />
            <img className='blueprint-3' src='img/black.png' alt='blueprint' />
        </div>
    )
}

export default Mobile
