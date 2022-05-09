import "./App.css";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  const createPost = (name, post, depth) => {
    setPosts(
      posts.concat(
        <Post key={posts.length} name={name} post={post} depth={depth} />
      )
    );
  };

  return (
    <div className="App">
      <div className="NewPostBox">
        <h1 className="Header">New Post</h1>
        <NewPost createPost={createPost} depth={0} />
      </div>
      <div className="Posts">{posts}</div>
    </div>
  );
};

export default App;
