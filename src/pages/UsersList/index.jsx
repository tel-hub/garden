import {Link, useParams} from "react-router-dom";

import "./index.module.scss";
import React, {useEffect, useState} from "react";
import {getUsers} from "../../requests/categories_req";
//import RoleItem from "../../components/RoleItem";

export default function UsersList() {
  const {user_role} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(json => {
      setUsers(json);
    });

  }, []);

  return (
    <div>
      <p>UsersPage</p>

      <div>
        <Link className={"link"} to={"/"}>MainPage</Link>
        <Link className={"link"} to={"/users"}>UsersPage</Link>
      </div>

      <div className="users-container">
        {
          //users.filter(f => f.role === user_role).map((user, index) => {
          //  return <RoleItem key={index} id={user.id} name={user.name} image={user.avatar}/>
          //})
        }
      </div>
    </div>
  );
}
