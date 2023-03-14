import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

// pages imports 
import Homepage from './pages/Homepage';
import Navbar from './pages/navbar';
import Page404 from './pages/Page404';
import Search from './pages/Search';

function App() {
  return (
    <Router className="App">
<<<<<<< HEAD
        
        <Routes>
            {/* <Route path='/' exact element={<Navbar/>}/> */}
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='' exact element={<Page404/>}/>
            <Route path="/Search" exact element={<Search/>}/>
=======
        <Routes>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='*' exact element={<Page404/>}/>
>>>>>>> 4fab56ed3047dd634b203368ef3aaea24f7edd36
        </Routes>
    </Router>
  );
}

export default App;
