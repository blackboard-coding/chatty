import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Background, ButtonGo, IconChatty, InputKeyName } from '@chatty/components';
import PropTypes from 'prop-types'
// import { useSocketAddUser } from '@chatty/store'
import { socket } from '@chatty/socket.io'
const styles = {}

function FristPage(props) {
    const [textValue, setTextValue] = useState("");
    // const {username,setUsername} = useSocketAddUser()

    function login() {
        socket.emit('add user', textValue);
        // useSocketAddUser(textValue) 
        // send()
        // console.log(`click ButtonGo => ${username}`);
    }

    const handleChange = event => {
        setTextValue(event.target.value);


    }

    // useEffect(() => {

    // }, [callbackUsername])



    return (
        <Fragment>
            <Background bg_color="#3E3E3E">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        margin: 0,
                        position: 'absolute',
                        top: '50%',
                        MsTransform: 'translateY(-50%)',
                        transform: 'translateY(-50%)',
                    }}>
                        {/* <IconChatty /> */}
                        <InputKeyName
                            value={textValue}
                            onChange={handleChange}
                        />
                        <div style={{
                            justifyContent: 'center',
                            display: 'flex',
                            backgroundColor: 'black',
                            margin: '25px',
                            borderRadius: '5px',
                        }}>
                            <ButtonGo onClick={login} font_color='white' />
                        </div>
                    </div>
                </div>
            </Background>
        </Fragment>
    )
}

FristPage.propTypes = {
    callbackUsername: PropTypes.func.isRequired,
    send: PropTypes.func.isRequired
}

export default withStyles(styles, { name: "FirstPages" })(FristPage);

