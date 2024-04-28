import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    isLoggedIn: false,
    role: '',
    courseStudied:""
}

export const LoginedUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedUser: (state, action) => {
            console.log(action.payload);
            state.courseStudied = action.payload
          
        },
        isLoggedIn: (state) => {
            state.isLoggedIn = true
        },
        isNotLoggedIn: (state) => {
            state.isLoggedIn = false
        },
        setUser: (state, action) => {
            state.role = 'user'
        },
        setAdmin: (state, action) => {
            state.role = 'admin'
        },
        logout: (state) => {
            state.user = ''
            state.role = ''
            state.isConnected = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { loggedUser, isLoggedIn, isNotLoggedIn, setUser,setAdmin, logout } = LoginedUserSlice.actions

export default LoginedUserSlice.reducer