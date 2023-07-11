import React, {useEffect, useState} from "react";

import {Link, useParams} from "react-router-dom";
import {getUserInfo} from "../../requests/categories_req";

import "./index.module.scss";

export default function UserInfoPage() {
  const {user_id} = useParams();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo(user_id).then(json => {
      console.log("user_id", user_id, json);
      setUserInfo(json);
    });

  }, [user_id]);

  return (
    <div>
      <div>
        <Link className={"link"} to={"/"}>MainPage</Link>
        <Link className={"link"} to={"/users"}>UsersPage</Link>
      </div>

      <p>User {user_id}</p>

      {userInfo === {} ? null : <>
        <h4>{userInfo?.name ?? ""}</h4>
        <p>role:{userInfo?.role ?? ""}</p>
        <p>email:{userInfo?.email ?? ""}</p>
        <p>password:{userInfo?.password ?? ""}</p>
        <div className="product-image-gallery">
          {userInfo.avatar ?
            <div className="product-image-thumb"><img src={userInfo.avatar} alt="image"/></div>
            : null
          }
        </div>
      </>}
    </div>
  );
}
