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
            <Techniques />
            <Github />
            <MyProjects />
            <Contact />
        </div>
    )
}

export default Mobile
