import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import LogementDetails from './pages/logementdetails';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/logement/:id" element={<LogementDetails/>} />
          <Route element={<NotFound/>} />
          <Route path="/a-propos" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


