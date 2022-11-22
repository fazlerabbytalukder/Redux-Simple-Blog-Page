import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PostContainer from './components/PostContainer';
import Search from './components/Search';

function App() {
  return (
    <div>
      {/* <!-- navigation --> */}
      <Navbar />
      {/* <!-- search --> */}
      <Search />
      {/* posts */}
      <PostContainer />
      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default App;
