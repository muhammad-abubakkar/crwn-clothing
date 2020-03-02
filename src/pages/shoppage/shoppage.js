import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collectionProps }) => {
          return <CollectionPreview key={id} {...collectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
