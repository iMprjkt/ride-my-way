import React, { Component } from 'react'

class FormSelect extends Component {
    render() {
        return (
            <div className="login">
                    <input id="signin" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="signin" className="tab">Sign In</label>
                    <input id="signup" type="radio" name="tab" className="sign-up" /><label htmlFor="signup" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="signin-form">
                            <div className="wrapper">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" placeholder="Username" />
                            </div>
                            <div className="wrapper">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" placeholder="Password" />
                            </div>
                            <div className="wrapper">
                                <input id="check" type="checkbox" className="check" />
                                <label htmlFor="check"><span className="icon" />Keep me signed in</label>
                            </div>
                            <div className="wrapper">
                                <a className="button" href="landing.html">Sign in</a>
                            </div>
                            <div className="hr" />
                            <div className="footer">
                                <a href="#forgot">Forgot Password</a>
                            </div>
                        </div>
                        <div className="signup-form">
                            <div className="wrapper">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" placeholder="Username" />
                            </div>
                            <div className="wrapper">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" placeholder="Password" />
                            </div>
                            <div className="wrapper">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat password" />
                            </div>
                            <div className="wrapper">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input" placeholder="Email Address" />
                            </div>
                            <div className="wrapper">
                                <a className="button" href="landing.html">Sign Up</a>
                            </div>
                            <div className="hr" />
                            <div className="footer">
                                <p>Already a member? <a href="index.html">Sign in</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default FormSelect