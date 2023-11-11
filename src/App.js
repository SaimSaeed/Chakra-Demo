
import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CartPAge from './pages/CartPAge';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';

function App() {
  return (
<>
<Router>
  <Navbar/>
<Routes>
<Route path='/' index element={<Home/>}/>
<Route path='/post' element={<PostPage/>}/>
<Route path='/cart' element={<CartPAge/>}/>
<Route path='*' element={<ErrorPage/>}/>












</Routes>
<Footer/>
</Router>
</>
  );
}

export default App;
