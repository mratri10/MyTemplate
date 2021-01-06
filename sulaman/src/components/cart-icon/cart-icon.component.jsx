import "./cart-icon.style.scss";
import React from "react";

import { ReactComponent as BagIcon } from "../../assets/bag.svg";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <BagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispacthToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toogleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);
