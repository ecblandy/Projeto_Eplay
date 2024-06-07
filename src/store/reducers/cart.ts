import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

export default cartReducer.reducer
export const { addCart } = cartReducer.actions
