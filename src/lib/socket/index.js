import React from 'react';
import socketIOClient from 'socket.io-client';

const url = "http://localhost:4000/";

const socket = socketIOClient(url)

export default socket;
