import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Category from './pages/Category';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
