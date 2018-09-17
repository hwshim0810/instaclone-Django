import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToSearch: term => {
            dispatch(push(`/search/${term}`));
        }
    };
};

export default connect(null, mapDispatchToProps)(Container);
