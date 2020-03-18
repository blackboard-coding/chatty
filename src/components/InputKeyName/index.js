import React from 'react';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {};

const theme = createMuiTheme({
    overrides: {
        MuiFormLabel: {
            root: {
                color: 'rgba(255, 255, 255, 0.42)',
                '&.Mui-focused': {
                    color: 'rgba(255, 255, 255, 0.42)'
                }
            }

        },
        MuiInputBase: {
            root: {
                color: 'rgba(255, 255, 255,87)',
                cursor: 'text',
                display: 'inline-flex',
                position: 'relative',
                fontSize: '1rem',
                boxSizing: 'border-box',
                alignItems: 'center',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: '400',
                lineHeight: '1.1875em',
                letterSpacing: '0.00938em',
            }
        },
        MuiInput: {
            underline: {
                '&:before': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // content: "\00a0",
                    position: 'absolute',
                    transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.42)',
                    pointerEvents: 'none',
                },
                '&:hover:not(.Mui-disabled):before': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // content: "\00a0",
                    position: 'absolute',
                    transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.42)',
                    pointerEvents: 'none',
                },
                '&:after': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    content: "",
                    position: 'absolute',
                    transform: 'scaleX(0)',
                    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.42)',
                    pointerEvents: 'none',
                }
            }
        }
    }
})

function InputKeyName(props) {
    const { value, onChange } = props;
    return (
        <ThemeProvider theme={theme}>
            <Grid item>
                <TextField
                    id="input-with-icon-grid"
                    value={value}
                    label="Username"
                    onChange={onChange}
                    style={{
                        // borderBottom: '2px solid rgba(255, 255, 255, 0.42)'
                    }} />
            </Grid>
        </ThemeProvider>
    )
}

InputKeyName.propTypes = {
    bg_color: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default withStyles(styles, { name: "InputKeyName" })(InputKeyName)