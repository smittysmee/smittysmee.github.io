import React from 'react';
import {Route, Routes***REMOVED*** from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import AboutContainer from '../containers/AboutContainer';
import ContactContainer from '../containers/ContactContainer';

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/about" element={<AboutContainer/>***REMOVED***/>
                <Route path="/contact" element={<ContactContainer/>***REMOVED***/>
                <Route path="/" element={<HomeContainer/>***REMOVED***/>
            </Routes>
    );
***REMOVED***

export default AppRoutes;
