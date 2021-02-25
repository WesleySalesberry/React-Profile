import React from 'react'
import { Title, Span } from '../Styles/headliner'

export const Headline = ({maintitle, subtitle}) => {
    return (
        <Title>
            <h3>
                {maintitle}
                <Span>{subtitle}</Span>
            </h3>
        </Title>
    )
}
