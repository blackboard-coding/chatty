import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import { Background, Header, Footer } from '@chatty/components';


const styles = {};

function RoomChatPage(props) {
    const { socket } = props;
    return (
        <Fragment>
            <Background bg_color="#FFF">
                <div>
                    <Header username="" />
                    <div style={{
                        height: (window.innerHeight - (75 + 75))
                    }}>
                        {/* {showMsg !== null ? (
                            <Fragment>
                                {showMsg.map((msg, i) => (
                                    <p key={i}>{msg.messager}</p>
                                ))}
                            </Fragment>
                        ) : (
                                <Fragment>

                                </Fragment>
                            )} */}

                    </div>
                    <Footer socket={socket} />
                </div>
            </Background>
        </Fragment>
    )

}

export default withStyles(styles, { name: "RoomChatPage" })(RoomChatPage)