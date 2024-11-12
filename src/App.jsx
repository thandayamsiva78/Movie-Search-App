import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MovieCard from './components/movie-card';
import MovieDetails from './components/movie-details';
import Footer from './components/footer';
import Feedback from './components/feedback';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
