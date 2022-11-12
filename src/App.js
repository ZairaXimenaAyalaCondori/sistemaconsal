import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import MainHeader from './../src/common/MainHeader.js';
import MainNav from './common/MainNav.js';
import MainFooter from './common/MainFooter.js';
import Services from './../src/pages/Services.js';


function App() {
  return (
    <>
      <BrowserRouter>
          <MainHeader />
          <MainNav />

          <main id="main-content">

            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/services" element={<Services/>} />
            </Routes>
            
          </main>

          <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
