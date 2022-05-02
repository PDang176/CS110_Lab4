import './NewPost.css';

function NewPost(){
  const submitPost = () => {
    this.props.parentCallback('hi');
  }

  return (
    <div className='NewPost'>
      <h1 className='Header'>New Post</h1>
      <input className='Name' type='text' placeholder='Name...'/>
      <textarea className='Post' placeholder='Write a new post...'/>
      <button className='Submit' onClick={submitPost}>Submit</button>
    </div>
  );
}

export default NewPost;