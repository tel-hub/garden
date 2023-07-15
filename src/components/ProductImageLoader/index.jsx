import React, {useCallback, useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../features/helpers/functions";
import {BASE_URL} from "../../features/helpers/constants";

export default function ProductImageLoader(props) {
  const {image, name} = props;
  const [hasError, setHasError] = useState(false);

  const imageError = useCallback((e) => {
    if (!hasError) {
      setHasError(true);
      e.target.parentElement.innerHTML = `<img alt="${e.target.alt}" src="${e.target.src}" loading="lazy">`;
    }
  }, [hasError]);

  return (
    <LazyLoadImage
      alt={name}
      threshold={300}
      effect={"opacity"}
      {...props}
      //placeholder={<Preloader></Preloader>}
      {...makeRetinaSrc(BASE_URL + image)}
      onError={imageError}
    />
  );
}
