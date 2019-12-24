import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <p className="navbar-brand" >Lead manager</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        
                    </ul>
                </div>
                </div>
            </nav>
        
    )
}
