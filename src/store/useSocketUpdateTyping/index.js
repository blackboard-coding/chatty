import React, { useEffect, useState } from 'react';
import { socket } from '@chatty/socket.io'

export default function useSocketUpdateTyping() {

    const [connected, setConnected] = useState(false)
    const [typing, setTyping] = useState(false)
    const TYPING_TIMER_LENGTH = 400;

    useEffect(() => {
        if (connected) {
            if (!typing) {
                setTyping(true)
                socket.emit('typing');
            }
            var lastTypingTime = (new Date()).getTime();
            setTimeout(() => {
                var typingTimer = (new Date()).getTime();
                var timeDiff = typingTimer - lastTypingTime;
                if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
                    socket.emit('stop typing');
                    setTyping(false)
                }
            }, TYPING_TIMER_LENGTH);
        }
    }, [connected])

    return { setConnected, setTyping }
}