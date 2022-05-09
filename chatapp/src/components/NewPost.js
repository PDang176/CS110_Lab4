import "./NewPost.css";
import PropTypes from "prop-types";
import { useState } from "react";

const NewPost = ({ createPost, depth}) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  const submitPost = () => {
    // Clears post data from view
    setName("");
    setPost("");

    // Sends post data up to App.js
    createPost(name, post, depth);
  };

  return (
    <div className="NewPost">
      <input
        className="NameInput"
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="PostInput"
        placeholder="Write a new post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button
        className="SubmitBtn"
        onClick={submitPost}
        disabled={!name || !post}
      >
        Submit
      </button>
    </div>
  );
};

NewPost.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default NewPost;
