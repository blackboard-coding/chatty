import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import { Background, Header, Footer } from '@chatty/components';


const styles = {};

function RoomChatPage(props) {
    const { socket, user } = props;
    return (
        <Fragment>
            <Background bg_color="#FFF">
                <div>
                    <Header username={user.username} />
                    <div style={{
                        height: (window.innerHeight - (75+75))
                    }}></div>
                    <Footer username={user.username} />
                </div>
            </Background>
        </Fragment>
    )

}

export default withStyles(styles, { name: "RoomChatPage" })(RoomChatPage)