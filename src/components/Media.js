import React from 'react'
import MediaButton from './MediaButton'
import './Media.css'

class Media extends React.Component {

    render() {
        return (
            <div id="media">
                <MediaButton to="mailto:wilberforceclub@gmail.com" image="/email_purple.svg" tooltip="Contact us via email"/>
                <MediaButton to="https://www.facebook.com/TheWilberforceClub" image="/facebook_purple.svg" tooltip="Follow us on Facebook"/>
            </div>
        )
    }

}

export default Media