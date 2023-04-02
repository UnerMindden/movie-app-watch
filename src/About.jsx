import React from 'react';
import { useParams } from 'react-router-dom';

function About(props) {
    let {id} = useParams()
    
    return (
        <div>
            <h1>Hello </h1>
            <h2>Hell</h2>
        </div>
    );
}

export default About;