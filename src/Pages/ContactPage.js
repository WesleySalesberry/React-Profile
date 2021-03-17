import React from 'react'
import { ContactComponent } from '../Component/ContactComponent'
import { Headline } from '../Component/Headline'

export const ContactPage = () => {
    return (
        <div>
            <Headline maintitle={"contact"} subtitle={"contact"}/>
            <ContactComponent/>
        </div>
    )
}
