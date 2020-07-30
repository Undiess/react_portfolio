import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import Portfolio from "./components/pages/portfolio.js";
import Contact from "./components/pages/contact.js";
import Footer from "./components/navbar/footer.js"
function App() {
  return (
    <Router>
      <div >
        <Navbar/>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component = {Contact}/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
