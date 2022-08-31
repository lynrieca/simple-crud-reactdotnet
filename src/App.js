import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Navbar />
            <div className="pages">
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
