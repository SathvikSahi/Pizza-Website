import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import PizzaDetails from './pages/PizzaDetails';

const App = (props) => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Router>
                <Header />
                <Sidebar />

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/pizza/:id" element={ <PizzaDetails /> } />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;