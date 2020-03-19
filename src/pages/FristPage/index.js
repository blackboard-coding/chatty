import React, { Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Background, ButtonGo, IconChatty, InputKeyName } from '@chatty/components';

const styles = {}

function FristPage(props) {
    const { socket } = props;
    const [username, setUsername] = useState("");

    function login() {
        socket.emit('add user', username);

        console.log(`click ButtonGo => ${username}`);
    }

    const handleChange = event => {
        setUsername(event.target.value);
        
        
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

export default withStyles(styles, { name: "FirstPages" })(FristPage);

