import './NewPost.css';

function NewPost() {
  return (
    <div className='NewPost'>
      <h1 className='Header'>New Post</h1>
      <input className='Name' type='text' placeholder='Name...'/>
      <textarea className='Post' placeholder='Write a new post...'/>
      <button className='Submit'>Submit</button>
    </div>
  );
}

export default NewPost;