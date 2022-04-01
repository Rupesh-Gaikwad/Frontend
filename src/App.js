import './App.css';
import Navbar from './Components/Post_Components/Navbar';
import Post from './Components/Post_Components/Post';
import User from './Components/User_Profile_Component/User';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Post/> */}
      <User/>
    </div>
  );
}

export default App;
