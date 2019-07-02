import React from 'react'
import MediaButton from './MediaButton'
import './Media.css'

class Media extends React.Component {

    render() {
        return (
            <div id="media">
                <MediaButton to="mailto:wilberforceclub@gmail.com" image="var(--image-email-purple)" tooltip="Contact us via email"/>
                <MediaButton to="https://www.facebook.com/TheWilberforceClub" image="var(--image-facebook-purple)" tooltip="Follow us on Facebook"/>
            </div>
        )
    }

}

export default Media