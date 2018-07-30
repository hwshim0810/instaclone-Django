import React, { Component } from 'react';
import SignupForm from './presenter';


class Container extends Component {

    state = {
        email: '',
        fullname: '',
        username: '',
        password: ''
    };

    render() {
        const { email, fullname, username, password } = this.state;
        return <SignupForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            emailValue={email}
            fullnameValue={fullname}
            usernameValue={username} 
            passwordValue={password} />;
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value
        });
    };

    _handleSubmit = event => {
        event.preventDefault();
        // Redux action :: transfer date to backend
        console.log(this.state);
    };

    _handleFacebookLogin = response => {

    };
}

export default Container;