import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
// import { routes } from '@chatty/routers';
import socketIOClient from 'socket.io-client';
import { FristPage } from '@chatty/pages';
function App() {

  const [socket_url] = useState("http://locahost:4000")
  const socket = socketIOClient(socket_url)

  return (
    <Fragment>
      <Switch>
        <Route
          path="/"
          exact={true}>
          <FristPage socket={socket} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
