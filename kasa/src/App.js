import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogementDetails from './pages/logementdetails';

function App() {
  return (
      <BrowserRouter>
      <Home/>
      <About/>
        <Routes>
          <Route path="/home" exact component={Home}/>
          <Route path="/logement/:id" exact strict render={(props) => <LogementDetails {...props}/>}/>
          <Route component={NotFound}/>
          <Route path="/a-propos" component={About}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;