import React, { useState, useRef } from 'react';
import { withStyles, Button } from '@material-ui/core';
import { CameraIcon, SendIcon } from '@chatty/icons';
import PropTypes from 'prop-types';
import ButtonUploadPicture from './components/ButtonUploadPicture'
import ButtonUploadVideo from './components/ButtonUploadVideo'

const styles = {};

function Footer(props) {
    const { sendMessage } = props;
    const [textMsg, setTextMsg] = useState("");
    const inputEl = useRef("");

    const handleChange = event => {
        setTextMsg(event.target.value);
    }

    const Send = () => {
        // console.log({
        //     username: user.username,
        //     messager: textMsg
        // });

        if (sendMessage) {
            sendMessage(textMsg)
        }
        // socket.emit('new message', textMsg);
        setTextMsg("")
        // console.log(inputEl.current.focus());
        inputEl.current.focus();
    }

    const SendImage = (data) => {
        if (sendMessage) {
            sendMessage(data)
            console.log(data);

        }
    }

    const SendVideo = (data) => {
        if (sendMessage) {
            sendMessage(data)
            console.log(data);

        }
    }
    return (
        <footer style={{
            display: "flex",
            height: '75px',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            backgroundColor: 'gainsboro'
        }}>
            <div style={{
                display: 'grid',
                width: '-webkit-fill-available',
            }}>

                <div style={{
                    display: 'flex'
                }}>
                    <div style={{
                        display: "flex"
                    }}>
                        <Button style={{
                            minWidth: 'auto'
                        }}>
                            <ButtonUploadVideo sendImage={(data) => {
                                SendVideo(data)
                                console.log(data);

                            }

                            } />
                        </Button>
                        <Button style={{
                            minWidth: 'auto'
                        }}>
                            <ButtonUploadPicture sendImage={(data) => {
                                SendImage(data)
                                console.log(data);

                            }

                            } />
                        </Button>
                    </div>
                    <div style={{
                        width: "-webkit-fill-available"
                    }}>
                        <input ref={inputEl} type="text" value={textMsg} style={{
                            width: '-webkit-fill-available',
                            borderRadius: '5px',
                            border: 'white',
                            height: '25px',
                            margin: '5px',
                            padding: '5px',
                            fontSize: '15px'

                        }} onChange={
                            handleChange
                        } />
                    </div>
                    <div style={{
                        display: "flex"
                    }}>
                        <Button onClick={Send}>
                            <SendIcon />
                        </Button>
                    </div>
                </div>
                <div style={{
                    height: '25px'
                }}></div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    sendMessage: PropTypes.func.isRequired
}

export default withStyles(styles, { name: "Footer" })(Footer)