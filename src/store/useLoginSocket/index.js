import { useEffect, useState } from 'react';

export default function useLoginSocket(socket) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        socket.on('login', (data) => {
            // connected = true;
            // Display the welcome message
            setUser(data)
            var message = "Welcome to Socket.IO Chat – ";
            console.log(message, {
                user: data
            });
        });

    }, [socket])
    return { user }
}