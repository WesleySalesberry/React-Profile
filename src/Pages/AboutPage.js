import React from 'react'
import { Headline } from '../Component/Headline'
import { About } from '../Styles/aboutpage'
import { HeroSubText } from '../Styles/homepage'


export const AboutPage = () => {
    return (
        <div>
            <Headline maintitle={"Who"} subtitle={"me"}/>
            <About>
                <HeroSubText>
                    <h3>Hello! I'm Wesley, a software engineer based in North Carolina.</h3>

                    <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                </HeroSubText>
            </About>
        </div>
    )
}
