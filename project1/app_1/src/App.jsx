import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';

import './App.css'

function App(){
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(()=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage){
      case 'home':
        return <Home />;
      // case 'about':
      //   return <About />;
      // case 'services':
      //   return <Services />;
      // case 'contact':
      //   return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
// this page is to import all the other pages from src/pages and render them here

export default App;