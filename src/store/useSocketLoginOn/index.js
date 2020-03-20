import React, { useEffect, useState } from 'react';
import { socket } from '@chatty/socket.io'

export default function useSocketLoginOn() {
  const [data, setData] = useState(null)

  useEffect(() => {
    socket.on('login', (data) => {
      // Display the welcome message
      // console.log(data);
      if(data.username !== null) {
        setData({
          connected: data.status,
          username: data.username,
          msg: "Wellcom to Chatty"
        })
      }
    });
  }, [socket])

  return { data }
}