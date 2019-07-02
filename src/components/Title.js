import React from 'react'

function Title(props) {

    return (
        <div className="image-header" style={{backgroundImage: `url(${props.background})`}}>
            <div/>
            <div className="image-header-text">
                <span style={{fontSize: "2em"}}>{props.text}</span><br/>
                <span style={{fontFamily:"Lucida Bright Demibold"}}>{props.subtext}</span>
            </div>
        </div>
    )

}

export default Title