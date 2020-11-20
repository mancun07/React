
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {

        switch (action.type) {
            case 'SIGN_IN_ERROR' :
            console.log('sign in failed')
            return {
                ...state,
                authError: 'Sign In failed'
            }

            case 'SIGN_IN_SUCCESS':
                console.log('success')
                // this.props.history.push('/')
            return {
                ...state,
                authError: null
            }

            case 'SIGNUP_ERROR':
                console.log('signup error')
                return {
                    ...state,
                    authError: action.err
                }

            case 'SIGNUP_SUCCESS':
                console.log('signup success')
                return {
                    ...state,
                    authError: null
                }

            case 'LOG_OUT_SUCCESS':
                console.log('Log out success')
                return state
            
                default:
            return state
        }

}

export default authReducer