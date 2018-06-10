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
        <form className={formStyles.form}>
            <input className={formStyles.textInput} type="email" placeholder="Email" />
            <input className={formStyles.textInput} type="text" placeholder="Full Name" />
            <input className={formStyles.textInput} type="username" placeholder="Username" />
            <input className={formStyles.textInput} type="password" placeholder="Password" />
            <input className={formStyles.button} type="submit" value="Sign up" />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
    </div>
);

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default SignupForm;