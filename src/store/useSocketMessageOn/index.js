import React, { useEffect, useState } from 'react';
import { socket } from '@chatty/socket.io'

export default function useSocketMessageOn() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('new message', (data) => {

      if (typeof data !== "string") {
        console.log(typeof data);
        setMessages([...messages, data])
      } else {
        setMessages([...messages, data])
      }

    })
  }, [socket])

  return { messages }
}