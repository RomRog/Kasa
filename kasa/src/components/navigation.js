import { Component } from 'react';
import { NavLink } from "react-router-dom"

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <NavLink exact="true" to="/" activeclassname="nav-active">
                    Accueil
                </NavLink>
                <NavLink exact="true" to="/a-propos" activeclassname="nav-active">
                    A propos
                </NavLink>
            </div>
        )
    }
}

export default Navigation;