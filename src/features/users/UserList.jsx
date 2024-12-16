import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../users/userSlice";

const UserList = () => {
  const users = useSelector(selectAllUsers);

  return (
    <section className="py-7 w-5/6 mx-auto">
      <div className="mb-5">
        <p className="text-center md:text-2xl font-semibold">Users</p>
      </div>
      <div className="" >
        {users.map((user) => (
          <div key={user.id}>
            <ul>
              <Link to={`/user/${user.id}`}>
                <li className="my-3 text-blue-800 underline font-semibold text-lg">{user.name}</li>
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;
