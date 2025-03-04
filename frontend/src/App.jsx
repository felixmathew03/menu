import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Menus from './Components/Menus';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AddMenu from './Components/AddMenu';
import AddItem from './Components/AddItem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
              <Nav />
              <Menu />
              <Menus />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
