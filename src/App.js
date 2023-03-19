
// 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

// pages imports 
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';


function App() {
<<<<<<< HEAD
  return (
    <Router className="App">
        
        <Routes>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='' exact element={<Page404/>}/>
            <Route path="/Search" exact element={<Search/>}/>
        </Routes>
    </Router>
  );
=======
	return (
		<Router className="App">

			<Routes>
				<Route path='/' exact element={<Homepage />} />
				<Route path='' exact element={<Page404 />} />
			</Routes>
		</Router>
	);
>>>>>>> db43ce2d161d679ad0e013dfa569645444374a53
}

export default App;
