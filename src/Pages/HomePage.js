import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hero, HeroText, Home, HeroSubText, IconHolder } from '../Styles/homepage'

export const HomePage = () => {
    return (
        <Home>
            <Hero>
                <HeroText>Hi, I am <span>Wesley</span>.</HeroText>
                <HeroText>I build things for the web.</HeroText>
            </Hero>
            <HeroSubText>I'm a software engineer based in North Carolina specializing in building exceptional websites, applications, and everything in between.</HeroSubText>
            <IconHolder>
                <a href="https://github.com/wesleySalesberry/" target="_blank" rel="noopener noreferrer" className="icons">
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
                <a href="https://www.linkedin.com/in/wessalesberry/" target="_blank" rel="noopener noreferrer" className="icons">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                </a>
            </IconHolder>
        </Home>
    )
}
