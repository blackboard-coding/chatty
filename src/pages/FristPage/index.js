import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Background, ButtonGo, IconChatty, InputKeyName } from '@chatty/components';
import PropTypes from 'prop-types'

const styles = {}

function FristPage(props) {
    const { socket, callbackUsername } = props;
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");

    function login() {
        socket.emit('add user', username);
        setName(username)
        console.log(`click ButtonGo => ${username}`);
    }

    const handleChange = event => {
        setUsername(event.target.value);
        

    }
if(callbackUsername) {
    callbackUsername(name)

}

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
                            value={username}
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
    callbackUsername: PropTypes.func.isRequired
}

export default withStyles(styles, { name: "FirstPages" })(FristPage);

