import { createSlice } from '@reduxjs/toolkit'

export const mainUser = createSlice({
    name: 'mainUser',
    initialState: {
    },
  reducers: {
    setMainUser: (state, action) => {
        state.mainUser = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMainUser } = mainUser.actions

export default mainUser.reducer