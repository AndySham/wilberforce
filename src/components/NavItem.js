import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class NavItem extends React.Component {

    render() {
        return (
            <Link smooth to={this.props.linkTo} style={{ textDecoration: 'none', outline: 'none' }}>
                <div className="nav-item">
                    {this.props.name.toUpperCase()}    
                </div>
            </Link>
        )
    }

}

export default NavItem