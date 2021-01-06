import { ADD_CART, CLEAR_ITEM_FORM_CART, REMOVE_ITEM, TOOGLE_CART_HIDDEN } from "./cart.type";
import { addItemToCart, removeItemsFromCart } from "./cart.utils";

 const INITIAL_STATE = {
     hidden: true,
     cartItems:[]
 }

 const cartReducer = (state = INITIAL_STATE, action) =>{
     switch (action.type) {
         case TOOGLE_CART_HIDDEN:
             return{
                 ...state,
                 hidden: !state.hidden
             }
        case ADD_CART:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FORM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload)
            }
     
         default:
             return state;
     }
 }

export default cartReducer