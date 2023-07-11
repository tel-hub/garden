import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "./index.module.scss";
//import RolesContainer from "../../components/RolesContainer";

export default function UsersPage() {
  return (
    <div>
      <p>UsersPage</p>

      <div>
        <Link className={"link"} to={"/"}>MainPage</Link>
      </div>

      {/*<RolesContainer></RolesContainer>*/}
    </div>
  );
}
