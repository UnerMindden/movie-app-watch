import React from 'react';
import { useParams } from 'react-router-dom';

function Header(props) {
    const head = useParams()
    return (
        <div>
            <header>
                <h1>Hello {head}</h1>
            </header>
        </div>
    );
}

export default Header;