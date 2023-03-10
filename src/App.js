import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

// pages imports 
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router className="App">
        <Route>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='*' exact element={<Page404/>}/>
        </Route>
    </Router>
  );
}

export default App;
