import React, { Fragment } from 'react'

export default function MediaMessages(props) {
    const { type, src, alt } = props;

    if ((type === 'image/jpeg') || (type === 'image/png')) {
        console.log(type);

        return (
            <Fragment>
                <img src={src} alt={alt} style={{
                    maxWidth: '-webkit-fill-available'
                }} />
            </Fragment>
        )
    }

    if ((type === 'video/mp4') || (type === 'video/x-m4v')) {
        console.log(type);
        return (
            <Fragment>
                <video style={{
                    maxWidth: '-webkit-fill-available'
                }} controls>
                    <source src={src} type={type} />

                </video>
            </Fragment>
        )
    }


}