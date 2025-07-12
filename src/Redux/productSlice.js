import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push({ ...action.payload, id: Date.now() })
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    update: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id)
      state.items[index] = action.payload
    },
  },
})

export const { add, remove, update } = productSlice.actions
export default productSlice.reducer
