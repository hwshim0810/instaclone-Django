import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

// context : about i18n
// ex) Context in statefulComponent
// class Footer extends React.Component {
//     static contextTypes = {
//         t: PropTypes.func.isRequired
//     };
//     // render() {
//     //    this.context.t(...)
//     // }
// }

// Context in stateless component
const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Support</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Press</li>
                    <li className={styles.listItem}>API</li>
                    <li className={styles.listItem}>Privacy</li>
                    <li className={styles.listItem}>Terms</li>
                    <li className={styles.listItem}>Directory</li>
                    <li className={styles.listItem}>{context.t('Language')}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>2018 Lazygram</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Footer;