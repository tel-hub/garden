import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../features/helpers/constants";
import ProductImageLoader from "../ProductImageLoader";

export default function Category({id, image, name}) {
  return (
    <Link to={`${ROUTES.categoryId.path.replace(":category_id", id)}`} className="grid-item">
      <div className="item-image__holder">
        <ProductImageLoader
          image={image}
          name={name}
          wrapperClassName={"item-image"}
        />
      </div>
      <div className="category-name">{name}</div>
    </Link>
  );
}
