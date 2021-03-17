import React, { useState, useEffect } from 'react'
import { api } from '../Utils/api'
import { Button, Form, FormContainer, Input, TextArea, ErrorDiv } from '../Styles/formstyles'
import { NavLink } from 'react-router-dom'
import { LoaderContainer } from '../Styles/loadersStyle'

export const ContactComponent = () => {
    const [myMessage, setMyMessage] = useState({
        name: "", 
        email: "",
        message: ""
    })

    const [myResponse, setResponse] = useState({
        success: false,
        data: ''
    })
    const [error, setError ] = useState('') 

    const { name, email, message } = myMessage
    const { data, success } = myResponse
    


    const sendMessage = async () => {
        try {
            const response = await api.post('mail/contact', myMessage)
            console.log(response)
            setResponse({
                ...myResponse,
                success: response.data.success,
                data: response.data.data

            })
        } catch (error) {
            console.log(error)
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleChange = (evt) => {
        setMyMessage({
            ...myMessage,
            [evt.target.name]: evt.target.value
        })
    }

     const handleSubmit = (evt) => {
        evt.preventDefault()
        if(validateEmail(email)){
            sendMessage()
        }else{
            setError('Invalid Email')
        }
    }

    return success ?
    (
       
         <LoaderContainer>
            <h1>Hi {name.replace(/\b(\w)/g, s => s.toUpperCase())}, your message has been sent!</h1>
        </LoaderContainer>
        
        
    )
    :
    (
        <FormContainer>
            <Form>
                <h2>Drop me a line</h2>
                <Input 
                    type="text" 
                    name="name"
                    placeholder="Your Name..."
                    value={name}
                    onChange={evt => handleChange(evt)}
                />
                {
                    <ErrorDiv>
                        <p>{error}</p>
                    </ErrorDiv>
                }
                <Input 
                    type="email" 
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={evt => handleChange(evt)}
                />
                <TextArea
                    cols={40}
                    rows={40}
                    placeholder="Your message..."
                    name="message"
                    value={message}
                    onChange={evt => handleChange(evt)}
                />
                <Button onClick={evt => handleSubmit(evt)}>Send It!</Button>
            </Form>
        </FormContainer>
    )
}
