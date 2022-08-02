import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
    // cartItems: [],
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [], 
        // checking localstroge for card else show array
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {         
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                // alert(`increased ${state.cartItems[itemIndex].title} `)
            }else{
             
        const tempStore = { ...action.payload, cartQuantity:1}

            state.cartItems.push(tempStore)
                // alert(`${action.payload.title.substring(0,15)} added successfully`) // will alert when a new item is added to cart
            }

            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },


        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter((cartItem) =>
                cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity-=1
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
                state.cartItems = nextCartItems;
            }
             localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
         
        },

        clearCart(state, action) {
            state.cartItems = []
             localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity
            
                return cartTotal;
            }, {
                total: 0,
                quantity:0
            }
            )
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }

    }
})

export const { addToCart,removeFromCart,decreaseCart,clearCart,getTotals } = cartSlice.actions;
export  const getCartValue=(state) => state.cart 
export default cartSlice.reducer
