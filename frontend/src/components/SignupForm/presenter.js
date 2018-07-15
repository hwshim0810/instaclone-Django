import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

const SignupForm = props => (
    <div className={formStyles.formComponent}>
        <h3 className={styleMedia.signupHeader}>
            Sign up to see photos and videos from your friends
        </h3>
        <button className={formStyles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in
            with Facebook
        </button>
        <span className={formStyles.divider}>or</span>
        <form 
            className={formStyles.form}
            onSubmit={props.handleSubmit}>
            <input 
                className={formStyles.textInput} 
                type="email" 
                name="email"
                value={props.emailValue}
                onChange={props.handleInputChange}
                placeholder="Email" />
            <input 
                className={formStyles.textInput} 
                type="text" 
                name="fullname"
                value={props.fullnameValue}
                onChange={props.handleInputChange}
                placeholder="Full Name" />
            <input 
                className={formStyles.textInput} 
                type="username" 
                name="username"
                value={props.usernameValue}
                onChange={props.handleInputChange}
                placeholder="Username" />
            <input 
                className={formStyles.textInput} 
                type="password" 
                name="password"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                placeholder="Password" />
            <input 
                className={formStyles.button} 
                type="submit" 
                value="Sign up" />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default SignupForm;