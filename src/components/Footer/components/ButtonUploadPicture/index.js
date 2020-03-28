import React, { useRef, Fragment, useState } from 'react'
import { PictureIcon } from '@chatty/icons';
import PropTypes from 'prop-types';

export default function ButtonUplaodPicture(props) {
    const { sendImage } = props;
    const [base64, setBase64] = useState(null)

    const refInput = useRef();

    function loadFile(x) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            // preview.src = reader.result;
            setBase64(reader.result)
            if (sendImage) {
                sendImage({
                    name: refInput.current.files[0].name,
                    type: refInput.current.files[0].type,
                    lastModified: refInput.current.files[0].lastModified,
                    size: refInput.current.files[0].size,
                    data: reader.result
                })
            }
        }, false);

        if (refInput.current.files[0]) {
            reader.readAsDataURL(refInput.current.files[0]);
            console.log(refInput.current.files[0]);

        }



    }

    return (
        <Fragment >
            <input ref={refInput} onChange={() => loadFile(this)} type="file" accept="image/*" name="image" id="upload_image" style={{
                marginBottom: '4px',
                display: 'none'
            }} />
            <label htmlFor="upload_image" style={{
                display: 'flex'
                // cursor: 'pointer',
                // backgroundColor: 'gainsboro',
                // margin: 0,
                // height: '-webkit-fill-available',
                // padding: '7px',
                // borderRadius: '3px',
                // boxShadow: 'rgba(50, 50, 50, 0.4) 1px 3px 3px -2px',
            }}><PictureIcon /></label>
        </Fragment>
    )
}

ButtonUplaodPicture.propTypes = {
    sendImage: PropTypes.func.isRequired
}

