import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Headphones from './components/Headphones/Headphones';
import Home from './components/Home/Home';
import Speakers from './components/Speakers/Speakers';
import Accessories from './components/Accessories/Accessories';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='app_container'>
      <div className='header_container'>
        <header>
          <Header />
        </header>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;