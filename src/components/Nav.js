import React from 'react'
import NavItem from './NavItem'
import WilberforceLogo from '../assets/wilberforce.png'
import './Nav.css'

function nav() {
    return (
        <div id="nav">
            <div id="nav-title">
                <img src={WilberforceLogo} 
                    style={{ 
                        marginBottom: '20px',
                        width: "calc(var(--nav-width) * 0.8)"
                    }} 
                    alt="The Wilberforce Club"/>
                <br/>
                THE WILBERFORCE CLUB
            </div>
            <div id="nav-menu">
                <NavItem name="Home" linkTo="./#home"/>
                <NavItem name="About Us" linkTo="./#about_us"/>
                <NavItem name="Gin & Liberty" linkTo="./#gin_and_liberty"/>
                <NavItem name="Speaking Events" linkTo="./#speaking_events"/>
                <NavItem name="The Committee" linkTo="./#the_committee"/>
                <NavItem name="Contact Us" linkTo="./#contact_us"/>
            </div>
        </div>
    )
}

export default nav