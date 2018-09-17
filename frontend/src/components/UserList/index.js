import { connect } from 'react-redux';
import Container from './container';

const matStateToProps = (state, ownProps) => {
    const { user: { userList } } = state;
    return {
        userList
    };
};

export default connect(matStateToProps, null)(Container);