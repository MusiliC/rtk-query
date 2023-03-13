import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
import { selectAllPosts, selectPostByUser } from "../post/postSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // const postsForUsers = useSelector((state) => {
  //   const allPosts = selectAllPosts(state);
  //   return allPosts.filter((post) => post.userId === Number(userId));
  // });

  const postsForUsers = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  const postTitles = postsForUsers.map((post, index) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>
        {(index = index + 1)}. {post.title}
      </Link>
    </li>
  ));

  return (
    <section className="w-5/6 mx-auto py-7">
      <h2 className="text-center md:text-2xl font-semibold">
        {user?.name} Posts
      </h2>
      <div className="my-5 ">
        <ol className="my-4 text-blue-800 font-semibold text-lg">
          {postTitles}
        </ol>
      </div>
    </section>
  );
};

export default UserPage;
