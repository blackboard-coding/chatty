import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {};

function Background(props) {
    const { bg_color = "#fff", children } = props;
    return (
        <React.Fragment>
            <div style={{
                backgroundColor: bg_color,
                height: window.innerHeight,
                width: window.innerWidth
            }}>
                {children}
            </div>
        </React.Fragment>
    )
}

Background.propTypes = {
    bg_color: PropTypes.string
}

export default withStyles(styles, { name: "Background" })(Background)