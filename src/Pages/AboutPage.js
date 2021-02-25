import React from 'react'
import { Headline } from '../Component/Headline'
import { About } from '../Styles/aboutpage'
import { HeroSubText } from '../Styles/homepage'


export const AboutPage = () => {
    return (
        <div>
            <Headline maintitle={"about me"} subtitle={"about me"}/>
            <About>
                <HeroSubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam provident laboriosam unde harum ipsa eius tempora eum, quia nostrum itaque ut, maiores distinctio ducimus aspernatur hic. Quasi, libero iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam provident laboriosam unde harum ipsa eius tempora eum, quia nostrum itaque ut, maiores distinctio ducimus aspernatur hic. Quasi, libero iste!
                </HeroSubText>
            </About>
        </div>
    )
}
