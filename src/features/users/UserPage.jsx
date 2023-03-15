import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
// import { selectAllPosts, selectPostByUser } from "../post/postSlice";
import { Link, useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../post/postSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // const postsForUsers = useSelector((state) => {
  //   const allPosts = selectAllPosts(state);
  //   return allPosts.filter((post) => post.userId === Number(userId));
  // });

  // const postsForUsers = useSelector((state) =>
  //   selectPostByUser(state, Number(userId))
  // );

  const {
    data: postsForUsers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  // const postTitles = postsForUsers.map((post, index) => (
  //   <li key={post.id}>
  //     <Link to={`/post/${post.id}`}>
  //       {(index = index + 1)}. {post.title}
  //     </Link>
  //   </li>
  // ));

  let content;

  if (isLoading) {
    content = <p>Uploading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUsers;
    content = ids.map((id, index) => (
      <li key={id}>
        <Link to={`/post/${id}`}>
          {(index = index + 1)}. {entities[id].title}
        </Link>
      </li>
    ));
  } else {
    content = <p>{error}</p>;
  }

  return (
    <section className="w-5/6 mx-auto py-7">
      <h2 className="text-center md:text-2xl font-semibold">
        {user?.name} Posts
      </h2>
      <div className="my-5 ">
        <ol className="my-4 text-blue-800 font-semibold text-lg">{content}</ol>
      </div>
    </section>
  );
};

export default UserPage;
