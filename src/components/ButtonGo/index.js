import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const styles = {};

function ButtonGo(props) {
    const { font_color = "#000", onClick} = props;
    return (
        <React.Fragment>
            <Button
            onClick={onClick}
             style={{
                color: font_color,
                width: '-webkit-fill-available'
            }}>GO</Button>
        </React.Fragment>
    )
}

ButtonGo.propTypes = {
    font_color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default withStyles(styles, { name: "ButtonGo" })(ButtonGo)