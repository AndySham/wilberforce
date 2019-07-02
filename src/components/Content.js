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
                    <ShitloadOfText/>
                </div>
            </div>
        )
    }

}

export default Content