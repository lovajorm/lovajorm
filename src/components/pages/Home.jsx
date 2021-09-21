import React, { useEffect, useState } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { useWindowSize } from 'react-use'
import Introduction from '../pageBlocks/Introduction'
import Techniques from '../pageBlocks/Techniques'
import MyProjects from '../pageBlocks/MyProjects'
import Contact from '../pageBlocks/Contact'
import Mobile from '../pageBlocks/Mobile'
import Intro from '../pageBlocks/Intro'
import Github from '../pageBlocks/Github'

function Home() {
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

    const size = useWindowSize()
    const sideRef = React.useRef(null)
    const controllerRef = React.useRef(null)

    const [scrollWidth, setScrollWidth] = React.useState(0)

    React.useLayoutEffect(() => {
        if (sideRef.current) {
            let boxWidth = 0

            ;[...sideRef.current.children].forEach((c) => {
                const childBox = c.getBoundingClientRect()
                boxWidth = boxWidth + childBox.width
            })

            const w =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth

            const totalScrollWidth = boxWidth > w ? boxWidth - w : 0

            setScrollWidth(totalScrollWidth)
        }
    }, [size.height, size.width])

    return (
        <>
            {isMobile ? (
                <Mobile />
            ) : (
                <div className='desktop'>
                    <div className='content-block'>
                        <Intro />
                        <div className='squares'>
                            <div className='first-row'></div>
                            <div className='second-row'></div>
                        </div>
                    </div>
                    <Controller ref={controllerRef}>
                        <Scene
                            duration={scrollWidth}
                            pin
                            triggerHook={0.25}
                            enabled={size.width > 768}
                        >
                            {(progress) => {
                                return (
                                    <div>
                                        <div
                                            className='cnt'
                                            style={{
                                                transform: `translate3d(-${
                                                    scrollWidth * progress
                                                }px, 0, 0)`,
                                            }}
                                        >
                                            <div
                                                className='content'
                                                ref={sideRef}
                                                style={{ width: scrollWidth }}
                                            >
                                                <div
                                                    className='row-full-length'
                                                    style={{
                                                        height: '100%',
                                                        width: '5800px',
                                                    }}
                                                >
                                                    <div className='content-first'>
                                                        <img
                                                            src={
                                                                'img/black.png'
                                                            }
                                                            alt='blue'
                                                        />
                                                    </div>
                                                    <div className='squares-row'>
                                                        <div className='first-row'></div>
                                                        <div className='second-row'></div>
                                                        <Introduction />
                                                        <Techniques />
                                                        <Github />
                                                        <MyProjects />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }}
                        </Scene>
                    </Controller>
                    <div className='squares-last'>
                        <div className='first-row'></div>
                        <div className='second-row'></div>
                        <Contact />
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
