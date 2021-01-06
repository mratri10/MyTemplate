import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.scss";

const PreviewCollection = (item) => (
  <div className="collection-preview">
    <h1 className="title">{item.data.title}</h1>
    <div className="preview">
      {item.data.items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
