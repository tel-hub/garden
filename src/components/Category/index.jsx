import React from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../helpers/functions";
import {ROUTES, BASE_URL} from "../../helpers/constants";
import Preloader from "../Preloader";

export default function Category({id, image, name}) {
  return (
    <Link to={`${ROUTES.categoryId.path.replace(":id", id)}`} className="category-item">
      <LazyLoadImage
        alt={name}
        threshold={300}
        effect={"opacity"}
        wrapperClassName={"category-image"}
        //placeholder={<Preloader></Preloader>}
        {...makeRetinaSrc(BASE_URL + image)}
      />
      <div className="category-name">{name}</div>
    </Link>
  );
}
