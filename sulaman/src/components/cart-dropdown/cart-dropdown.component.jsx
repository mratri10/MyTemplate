import "./cart-dropdown.style.scss";
import React from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import { connect } from "react-redux";
import CardItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toogleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ toggleCartHidden, cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CardItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapsDispacthToProps = (dispacth) => ({
  toggleCartHidden: () => dispacth(toogleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(
  connect(mapStateToProps, mapsDispacthToProps)(CartDropdown)
);
