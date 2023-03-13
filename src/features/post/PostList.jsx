import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import PostsExercpt from "./PostsExercpt";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);


  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="w-full  py-8">
      <div className="w-5/6 mx-auto my-2">
        <p className="font-semibold text-xl text-center">Posts</p>
      </div>
      <div className="w-5/6 mx-auto">
        {/* {orderedPosts.map((post) => (
          <PostsExercpt post={post} key={post.id} />
        ))} */}

        {postsStatus === "loading" ? (
          <p>Loading</p>
        ) : (
          <div>
            {orderedPosts.map((post) => (
              <PostsExercpt post={post} key={post.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PostList;
