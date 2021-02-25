import React from 'react'
import { Link } from 'react-router-dom';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hero, HeroText, Home, HeroSubText, IconHolder } from '../Styles/homepage'

export const HomePage = () => {
    return (
        <Home>
            <Hero>
                <HeroText>Hi, I am <span>Wesley</span></HeroText>
            </Hero>
            <HeroSubText>and I build solutions to complex problems</HeroSubText>
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
