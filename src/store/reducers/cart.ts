import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// Type
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items = [...state.items, action.payload]
      } else {
        alert('O jogo ja está no carrinho')
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    }
  }
})

export default cartReducer.reducer
export const { addCart, openCart, closeCart, removeCart } = cartReducer.actions
