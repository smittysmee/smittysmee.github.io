import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import AboutContainer from '../containers/AboutContainer';
import ContactContainer from '../containers/ContactContainer';

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/about" element={<AboutContainer/>}/>
                <Route path="/contact" element={<ContactContainer/>}/>
                <Route path="/" element={<HomeContainer/>}/>
            </Routes>
    );
}

export default AppRoutes;
