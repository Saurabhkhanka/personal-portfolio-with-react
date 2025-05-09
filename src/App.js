import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import AboutPage from './pages/AboutPage'
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <HashRouter >
        <NavigationBar />
        <Routes>
          <Route exact path='/about-page' element={<AboutPage />} />
          <Route exact path='/*' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          {/* <Route exact path='/resume' element={<Resume />} /> */}
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
