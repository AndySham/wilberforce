import React from 'react'

class MediaButton extends React.Component {

    render() {
        return (
            <a href={this.props.to} style={{ textDecoration: 'none', outline: 'none' }}>
                <div class="tooltip media-button" style={{backgroundImage: `${this.props.image}`}}>
                    <span class="tooltiptext">{this.props.tooltip}</span>
                </div>
            </a>
        )
    }

}

export default MediaButton