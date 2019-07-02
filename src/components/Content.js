import React from 'react'
import JumpTo from './JumpTo'
import Title from './Title'
import "./Content.css"

function ShitloadOfText() {
    return (
        <p>
        sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
            sample text sample text sample text sample text sample text sample text<br/>
        </p>
    )
}

/** 'Contact us' section, requires slightly different formatting */
class Footer extends React.Component {

    render() {
        return (
            <div id="content-footer">
                Email us at <a href="mailto:wilberforceclub@gmail.com">wilberforceclub@gmail.com</a>,<br/>
                or find us on <a href="https://www.facebook.com/TheWilberforceClub/">Facebook</a>!
            </div>
        )
    }

}

/** Main body of page, i.e. everything except the sidebar */
class Content extends React.Component {

    registerJump(name, elem) {
        let jumps = Object.assign({}, this.state.jumps)
        jumps[name] = elem
        this.setState({ jumps })
    }

    render() {
        return (
            <div class="scroll-inside">
                <div>
                    <div id="content-wilberforce"/>
                    <JumpTo id="home"/>
                    <Title text="Welcome to The Wilberforce Club"
                        subtext="The home of open discourse in Oxford."
                        background="var(--image-home)"
                        backgroundColor="var(--bg-color-1)"/>
                    <ShitloadOfText/>
                    <JumpTo id="about_us"/>
                    <Title text="About Us"
                        background="var(--image-about-us)"
                        backgroundColor="var(--bg-color-1)"/>
                    <ShitloadOfText/>
                    <JumpTo id="gin_and_liberty"/>
                    <Title text="Gin & Liberty"
                        background="var(--image-gin-and-liberty)"
                        backgroundColor="var(--bg-color-1)"/>
                    <ShitloadOfText/>
                    <JumpTo id="speaking_events"/>
                    <Title text="Speaking Events"
                        background="var(--image-speaking-events)"
                        backgroundColor="var(--bg-color-1)"/>
                    <ShitloadOfText/>
                    <JumpTo id="the_committee"/>
                    <Title text="The Committee"
                        background="var(--image-committee)"
                        backgroundColor="var(--bg-color-1)"/>
                    <ShitloadOfText/>
                    <JumpTo id="contact_us"/>
                    <Title text="Contact Us"
                        background="var(--image-contact-us)"
                        backgroundColor="var(--bg-color-1)"/>
                    <Footer/>
                </div>
            </div>
        )
    }

}

export default Content