import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as userActions } from 'redux/modules/user';
import Container from './container';


const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList }, routing: { location } } = state;
    return {
        userList,
        imageList,
        location,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { term } } } = ownProps;
    return {
        searchByTerm: () => {
            dispatch(userActions.searchByTerm(term));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);