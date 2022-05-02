import './App.css';
import NewPost from './components/NewPost';

function App() {
  const createPost = (postData) => {
    console.log(postData);
  }

  return (
    <div className="App">
      <NewPost parentCallback={createPost}/>
    </div>
  );
}

export default App;
