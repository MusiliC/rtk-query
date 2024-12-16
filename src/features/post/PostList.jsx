import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds, getPostsError, getPostsStatus } from "./postSlice";
import PostsExercpt from "./PostsExercpt";
import { useGetPostsQuery } from "./postSlice";

const PostList = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

  // const posts = useSelector(selectAllPosts);
  const orderedPostsIds = useSelector(selectPostIds);
  // const postsStatus = useSelector(getPostsStatus);
  // const error = useSelector(getPostsError);

  // const orderedPosts = posts
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="w-full  py-8">
      <div className="w-5/6 mx-auto my-2">
        <p className="font-semibold text-3xl mb-4 text-center">Posts..</p>
      </div>
      <div className="w-5/6 mx-auto">
        {isLoading ? (
          <p className="text-xl font-semibold text-center my-4">Loading...</p>
        ) : isError ? (
          <div>
            <p className="text-xl font-semibold text-center my-4"> {error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {orderedPostsIds.map((postId) => (
              <PostsExercpt postId={postId} key={postId} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PostList;
