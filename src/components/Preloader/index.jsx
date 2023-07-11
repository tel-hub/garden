import React from "react";
import cn from "classnames";
import {ReactComponent as PreloaderIcon} from "../../icons/preloader.svg";
import s from "./index.module.scss";

export default function Preloader({preloaderClass = []}) {
  return (
    <div className={cn(s.preloader_wrapper, preloaderClass)}>
      <PreloaderIcon></PreloaderIcon>
    </div>
  );
}
