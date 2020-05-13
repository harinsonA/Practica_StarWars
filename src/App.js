import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './views/navbar';
import Home from './views/home';
import People from './views/people';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import injectContext from './store/appContext';
import Dtl_People from './components/dtl-people';
import Dtl_Planet from './components/dtl-planet';
import Dtl_Vehicle from './components/dtl-vehicle';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/people/:name" component={Dtl_People} />
          <Route exact path="/people" component={People} />
          <Route exact path="/vehicles/:name" component={Dtl_Vehicle} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/planets/:name" component={Dtl_Planet} />
          <Route exact path="/planets" component={Planets} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
