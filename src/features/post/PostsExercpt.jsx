import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExercpt = ({ post }) => {
  return (
    <div className="border p-4 mb-2  md:w-3/4 mx-auto rounded-md ">
      <h1 className="text-lg font-semibold">{post.title}</h1>
      <p className="my-1">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <h1>{post.body.substring(0, 100)}</h1>
      <div className="my-2 ">
        <ReactionButton post={post} />
      </div>
    </div>
  );
};

export default PostsExercpt;
