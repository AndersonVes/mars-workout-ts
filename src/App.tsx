import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Workout from './components/Workout';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workout/:workoutId' element={<Workout />} />
        <Route path='/*' element={<>404</>} />
      </Routes>
      <GlobalStyle />
  </Router>
  );
}

export default App;
