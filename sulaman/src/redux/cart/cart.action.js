import { ADD_CART, CLEAR_ITEM_FORM_CART, REMOVE_ITEM, TOOGLE_CART_HIDDEN } from "./cart.type";


export const toogleCartHidden = () =>({
    type: TOOGLE_CART_HIDDEN,
})

export const addItem = item =>({
    type: ADD_CART,
    payload:item
});

export const clearItemFromCart = item =>({
    type: CLEAR_ITEM_FORM_CART,
    payload: item
});

export const removeItem = item =>({
    type: REMOVE_ITEM,
    payload: item
})