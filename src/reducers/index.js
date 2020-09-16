import * as actionTypes from '../actions/types'

const user_reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }
            
    }
}