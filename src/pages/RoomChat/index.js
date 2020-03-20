import React, { Fragment, useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core';
import { Background, Header, Footer } from '@chatty/components';
import PropTypes from 'prop-types'
import { useSocketUpdateTyping, useSocketMessageOn } from '@chatty/store';
import { socket } from '@chatty/socket.io'

const styles = {};

function RoomChatPage(props) {
    const { title, startMsg } = props;
    const [chatBoxAlert, setChatBoxAlert] = useState([startMsg])
    const { messages } = useSocketMessageOn()
    const [chatBox, setChatBox] = useState([])
    const { setConnected, setTyping } = useSocketUpdateTyping()
    const scollRef = useRef()

    const MsgElement = document.getElementById('msg')
    useEffect(() => {
        setChatBox([...chatBox, ...messages])
    }, [messages])
    return (
        <Fragment>
            <Background bg_color="#FFF">
                <div>
                    <Header
                        username={title}
                    />
                    <ul ref={scollRef} style={{
                        height: (window.innerHeight - (75 + 75 + 40)),
                        overflowY: 'auto',
                        padding: '10px 20px 30px 20px',
                        scrollTop: document.body.scrollHeight,
                        margin:0
                        
                    }}>
                        {chatBoxAlert !== null ? (
                            <Fragment>
                                {chatBoxAlert.map((msg, i) => (
                                    <p key={i}>{msg}</p>
                                ))}
                                {chatBox.map((msg, i) => (
                                    <p key={i}>{msg.username}: {msg.message}</p>
                                ))}
                            </Fragment>
                        ) : (
                                <Fragment>

                                </Fragment>
                            )}

                    </ul>
                    <Footer
                        sendMessage={(msg) => {
                            setChatBox([...chatBox, {
                                username: title,
                                message: msg
                            }]);
                            socket.emit('new message', msg);
                            socket.emit('stop typing');
                            setTyping(false)

                            scollRef.current.scrollTop = scollRef.current.scrollHeight
                            // MsgElement.scrollTop +(MsgElement.scrollHeight)
                            console.log(scollRef.current.scrollTop);

                        }}
                    />
                </div>
            </Background>
        </Fragment>
    )

}

RoomChatPage.propTypes = {
    title: PropTypes.string,
    startMsg: PropTypes.string
}
export default withStyles(styles, { name: "RoomChatPage" })(RoomChatPage)