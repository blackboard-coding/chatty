import React, { Fragment, useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useLoginSocket } from '@chatty/store';
import {
  Switch,
  Route
} from "react-router-dom";
// import { routes } from '@chatty/routers';
import socketIOClient from 'socket.io-client';
import { FristPage } from '@chatty/pages';
function App() {

  const [socket_url] = useState("http://localhost:4000/")
  const socket = socketIOClient(socket_url)
  const { user } = useLoginSocket(socket);

  console.log(user);

  return (
    <Fragment>
      <Switch>
        {user !== null ? (
          <Fragment></Fragment>
        ) : (
            <Route
              path="/"
              exact={true}>
              <FristPage socket={socket} />
            </Route>
          )}

      </Switch>
    </Fragment>
  );
}

export default App;
