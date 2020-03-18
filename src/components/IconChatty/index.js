import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {};

function IconChatty(props) {
    const { children } = props;
    return (
        <React.Fragment>
            <div >
                {children}
            </div>
        </React.Fragment>
    )
}

IconChatty.propTypes = {
}

export default withStyles(styles, { name: "IconChatty" })(IconChatty)