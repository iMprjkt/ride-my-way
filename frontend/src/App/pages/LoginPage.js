import React, { Component } from 'react'
import FormSelect from '../components/FormSelect'
import '../css/signin.css'

class LoginPage extends Component {
    render() {
        return (
            <div className="login-wrap">
                <div className="heading">
                <h1>RIDE MY WAY</h1>
                </div>
                <FormSelect />
            </div>

        )
    }
}

export default LoginPage