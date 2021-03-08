import React from 'react'
import { Body, Card, Date, Name } from '../Styles/CommentCardStyle'

export const CommentCard = ({name, email, date, comment}) => {
    return (
       <Card>
           {
               name ? <Name>{name}</Name> : ""
            }
            <Name>{email}</Name>
            <Date>{date}</Date>
            <Body>{comment}</Body>
       </Card>
    )
}
