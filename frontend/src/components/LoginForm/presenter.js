import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
    <div className={formStyles.formComponent}>
        <form 
            className={formStyles.form} 
            onSubmit={props.handleSubmit}>
            <input 
                className={formStyles.textInput} 
                type="text" 
                placeholder="Username"
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username" />
            <input 
                className={formStyles.textInput} 
                type="password" 
                placeholder="Password"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password" />
            <input 
                className={formStyles.button} 
                type="submit" 
                value="Login" />
        </form>
        <span className={formStyles.divider}>or</span>
        <FacebookLogin
            appId="1795453460748510"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
            textButton="Login with Facebook"
        />
        <span className={formStyles.forgotLink}>Forgot password?</span>
    </div>
);


LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default LoginForm;