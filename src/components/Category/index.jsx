import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../features/helpers/functions";
import {ROUTES, BASE_URL} from "../../features/helpers/constants";

export default function Category({id, image, name}) {
  const [hasError, setHasError] = useState(false);

  const imageError = useCallback((e) => {
    if (!hasError) {
      setHasError(true);
      e.target.parentElement.innerHTML = `<img alt="${e.target.alt}" src="${e.target.src}" loading="lazy">`;
    }
  }, [hasError]);

  return (
    <Link to={`${ROUTES.categoryId.path.replace(":category_id", id)}`} className="grid-item">
      <div className="item-image__holder">
        <LazyLoadImage
          alt={name}
          threshold={300}
          effect={"opacity"}
          wrapperClassName={"item-image"}
          //placeholder={<Preloader></Preloader>}
          {...makeRetinaSrc(BASE_URL + image)}
          onError={imageError}
        />
      </div>
      <div className="category-name">{name}</div>
    </Link>
  );
}
