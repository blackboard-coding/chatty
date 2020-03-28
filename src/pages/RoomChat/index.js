import React, { Fragment, useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core';
import { Background, Header, Footer } from '@chatty/components';
import PropTypes from 'prop-types'
import { useSocketUpdateTyping, useSocketMessageOn } from '@chatty/store';
import { socket } from '@chatty/socket.io'
import MediaMessages from '../../components/MediaMessages'
import BadgeAvatars from '../../components/BadgeAvatars'
const styles = {};

function RoomChatPage(props) {
    const { title, startMsg } = props;
    const [chatBoxAlert, setChatBoxAlert] = useState([startMsg])
    const { messages } = useSocketMessageOn()
    const [chatBox, setChatBox] = useState([])
    const { setConnected, setTyping } = useSocketUpdateTyping()
    const scollRef = useRef()
    const [image, setImage] = useState("")
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
                        overflowX: 'hidden',
                        padding: '10px 20px 30px 20px',
                        scrollTop: document.body.scrollHeight,
                        margin: 0

                    }}>
                        {chatBoxAlert !== null ? (
                            <Fragment>
                                {chatBoxAlert.map((msg, i) => (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}><p key={i}>{msg}</p></div>
                                ))}
                                {chatBox.map((msg, i) => (
                                    <div key={i}>{title !== msg.username ? (
                                        <Fragment>
                                            {msg.message.type ? (
                                                <div style={{
                                                    // display: 'flex',
                                                    // justifyContent: 'flex-start'
                                                }}>
                                                    <BadgeAvatars username={msg.username} />
                                                    <MediaMessages src={msg.message.data} alt={msg.message.name} type={msg.message.type} />
                                                </div>

                                            ) : (
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <BadgeAvatars username={msg.username} />
                                                        <Fragment>{msg.message}</Fragment>
                                                    </div>
                                                )
                                            }
                                        </Fragment>
                                    ) : (
                                            <Fragment>
                                                {msg.message.type ? (
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'flex-end'
                                                    }}>
                                                        <MediaMessages src={msg.message.data} alt={msg.message.name} type={msg.message.type} />
                                                    </div>

                                                ) : (
                                                        <div style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-end'
                                                        }}>
                                                            <Fragment>{msg.message}</Fragment>
                                                        </div>
                                                    )
                                                }
                                            </Fragment>
                                        )}</div>
                                ))}
                            </Fragment>
                        ) : (
                                <Fragment>

                                </Fragment>
                            )}

                    </ul>
                    <Footer
                        sendMessage={(msg) => {


                            // if (msg.type !== null) {
                            //     const reader = new FileReader();


                            //     reader.addEventListener("load", function () {
                            //         // convert image file to base64 string
                            //         // preview.src = reader.result;
                            //         setChatBox([...chatBox, {
                            //             username: title,
                            //             message: msg
                            //         }]);
                            //     }, false);

                            //     if (msg) {
                            //         reader.readAsDataURL(msg);
                            //         console.log(msg);
                            //     }


                            // } else {
                            setChatBox([...chatBox, {
                                username: title,
                                message: msg
                            }]);
                            // }

                            // console.log(reader.result);


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