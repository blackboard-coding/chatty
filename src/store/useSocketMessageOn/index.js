import React, { useEffect, useState } from 'react';
import { socket } from '@chatty/socket.io'

export default function useSocketMessageOn() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('new message', (data) => {
      setMessages([...messages, data])
    })
  }, [socket])

  return { messages }
}