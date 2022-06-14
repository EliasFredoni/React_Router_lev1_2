import React from 'react'
import { Link } from 'react-router-dom';

export default function SchabloneMore() {
    return (
        <nav>
            <ul>
                <li className="hellButton">
                    <Link to="/speisekarte">Speisekarte</Link>
                </li>
                <li className="hellButton">
                    <Link to="/kontakt">Kontakt</Link>
                </li>
                <li className="hellButton">
                    <Link to="/oeffnungszeiten">Oeffnungzeiten</Link>
                </li>
                <li className="hellButton">
                    <Link to="/galerie">Galerie</Link>
                </li>
            </ul>
        </nav>
    )
}
