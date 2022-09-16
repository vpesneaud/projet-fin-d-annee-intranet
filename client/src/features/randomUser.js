import { createSlice } from '@reduxjs/toolkit'

export const randomUser = createSlice({
    name: 'randomUser',
    initialState: {
    },
  reducers: {
    setRandomUser: (state, action) => {
        state.randomUser = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRandomUser } = randomUser.actions

export default randomUser.reducer