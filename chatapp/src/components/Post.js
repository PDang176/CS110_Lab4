import "./Post.css";
import Vote from "./Vote.js";
import NewPost from "./NewPost.js";
import { MdReply } from "react-icons/md";
import { useState } from "react";

const Post = ({ name, post, depth }) => {
  const [newReply, setNewReply] = useState(false);
  const [replys, setReplys] = useState([]);

  const createReply = () => {
    setNewReply(newReply ? false : true);
  };

  const setReply = (name, post, depth) => {
    setReplys(
      replys.concat(
        <Post key={replys.length} name={name} post={post} depth={depth} />
      )
    );
    setNewReply(false);
  };

  return (
    <div className="Post">
      <h2 className="Name">{name}</h2>
      <p className="PostBody">{post}</p>
      <Vote />
      <div className="Replys">{replys}</div>
      {depth < 2 && (
        <button className="ReplyBtn" onClick={createReply}>
          <MdReply style={{ color: "black" }} /> Reply
        </button>
      )}
      {newReply && (
        <div className="NewReplyDiv">
          <NewPost createPost={setReply} depth={depth + 1} />
        </div>
      )}
    </div>
  );
};

export default Post;
