import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import LogementDetails from './pages/logementdetails';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Home />
        <About />
        <NotFound />
        <Routes>
          <Route path="/home" exact component={Home} />
          <Route path="/logement/:id" exact strict render={(props) => <LogementDetails {...props} />} />
          <Route component={NotFound} />
          <Route path="/a-propos" component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


