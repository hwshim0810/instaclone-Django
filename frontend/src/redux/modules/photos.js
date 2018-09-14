// imports

// actions

// action creators

// API actions

function getFeed() {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch('/images/', {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(err))
    }
}

// inital state

const initalState = {};

// reducer

function reducer(state = initalState, action) {
    switch (action.type) {
        default:
        return state;
    }
}

// reducer functions

// exports

const actionCreators = {
    getFeed
};

export { actionCreators };

// default reducer export

export default reducer;