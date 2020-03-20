import React, { Fragment, useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useSocketOn } from '@chatty/store';
import {
  Switch,
  Route
} from "react-router-dom";
// import { routes } from '@chatty/routers';
import socketIOClient from 'socket.io-client';
import { FristPage, RoomChatPage } from '@chatty/pages';
import { useSocketLoginOn } from '@chatty/store';
function App() {
const {data} =useSocketLoginOn()
  return (
    <Fragment>
      <Switch>
        {data !== null ? (
          <Route
            path="/"
            exact={true}>
            <RoomChatPage title={data.username} startMsg={data.msg}/>
          </Route>
        ) : (
            <Route
              path="/"
              exact={true}>
              <FristPage />
            </Route>
          )}

      </Switch>
    </Fragment>
  );
}

export default App;
