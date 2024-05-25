import React from 'react';
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer***REMOVED*** />
          <Route path="/about" component={AboutContainer***REMOVED*** />
          <Route path="/contact" component={ContactContainer***REMOVED*** />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
***REMOVED***

export default App;
