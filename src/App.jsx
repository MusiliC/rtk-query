import { useState } from 'react'
import PostList from './features/post/PostList'
import AddPost from './features/post/AddPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddPost/>
      <PostList/>
  </div>
  )
}

export default App
