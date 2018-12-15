import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.details.name}</h1>
                <h2>{this.props.details.contact}</h2>
                <h3>{this.props.details.email}</h3>
                <h3>{this.props.details.address}</h3>
            </div>
        );
    }
}

export default Header;