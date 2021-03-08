import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../Redux/auth/auth'
import { FormContainer, Form, Input, Button } from '../Styles/formstyles'
import { Redirect } from 'react-router-dom'

const LoginComponent = ({ login, isAuthenticated }) => {
    const [myLogin, setMyLogin] = useState({
        email: "",
        password: ""
    })

    const { email, password } = myLogin

    const handleChange = (evt) => {
        setMyLogin({
            ...myLogin,
            [evt.target.name]: evt.target.value
        })
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        login(email, password)
    }

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <FormContainer>
            <Form>
                <h2>Admin Login</h2>
                <label htmlFor="email">Email</label>
                <Input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={evt => handleChange(evt)}
                />
                <label htmlFor="password">Password</label>
                <Input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={evt => handleChange(evt)}
                />
                <Button onClick={evt => handleSubmit(evt)}>Submit</Button>
            </Form>
        </FormContainer>
    )
}

LoginComponent.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, { login })(LoginComponent)
