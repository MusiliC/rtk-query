import { useState } from "react";
import PostList from "./features/post/PostList";
import AddPost from "./features/post/AddPost";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import SinglePostPage from "./features/post/SinglePostPage";
import EditPost from "./features/post/EditPost";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />

          {/* posts */}
          <Route path="post">
            <Route index element={<AddPost />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPost />} />
          </Route>

          {/* users */}
          <Route path="user">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>

          {/* 404 page error */}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
