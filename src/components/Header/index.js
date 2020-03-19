import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import { BackIcon, DropdownIcon } from '@chatty/icons';

const styles = {};

function Header(props) {
    const { username } = props;
    return (
        <header style={{
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
                    height: '25px'
                }}></div>
                <div style={{
                    display: 'flex'
                }}>
                    <div>
                        <Button>
                            <BackIcon />
                        </Button>
                    </div>
                    <div style={{
                        width: "-webkit-fill-available"
                    }}>
                        <h3 style={{
                            margin: '5px'
                        }}>
                            {username}
                        </h3>
                    </div>
                    <div>
                        <Button>
                            <DropdownIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withStyles(styles, { name: "Header" })(Header)