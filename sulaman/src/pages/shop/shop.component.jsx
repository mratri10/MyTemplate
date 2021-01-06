import React, { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection";
import SHOP_DATA from "./shop.data";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA.filter((value) => {
        return value.id.toString().includes(props.match.params.id.toString());
      }),
    };
  }
  render() {
    return (
      <div>
        {this.state.collection.map(({ id, ...item }) => (
          <PreviewCollection key={id} data={item}></PreviewCollection>
        ))}
      </div>
    );
  }
}

export default ShopPage;
