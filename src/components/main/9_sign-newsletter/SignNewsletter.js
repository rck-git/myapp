import React from 'react'
import './sign-newsletter.css'

import Button from '../../../assets/generic/Button'

import backgroundlinesright from '../../../assets/images/background-wavy-lines.svg'

function SignNewsletter() {
    return (
        <section className="sign-newsletter">
            <img className="background-lines-right" src={backgroundlinesright} alt="wavy lines" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form action="register.html">
                    <input name="input-email" type="text" placeholder="username@domain.com" />
                    <a className="btn-yellow" href="register.html">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a>
                </form>
            </div>
        </section>
    )
}

export default SignNewsletter