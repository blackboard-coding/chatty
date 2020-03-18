import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { routes } from '@chatty/routers';
import socketIOClient from 'socket.io-client';


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={(route.exact !== undefined ? route.exact : false)}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} socket={props.socket} />
      )}
    />
  );
}



function App() {

  const [socket_url] = useState("http://locahost:4000")
  const socket = socketIOClient(socket_url)

  return (
    <Fragment>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} socket={socket} />
        ))}
      </Switch>
    </Fragment>
  );
}

export default App;
