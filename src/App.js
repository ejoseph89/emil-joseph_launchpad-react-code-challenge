
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import PostalLookup from './pages/PostalLookup';
import Universities from './pages/Universities';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/universities'
            element={<Universities />}
          />
          <Route
            path='/postal-lookup'
            element={<PostalLookup />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
