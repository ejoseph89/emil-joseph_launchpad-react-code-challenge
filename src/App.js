
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
