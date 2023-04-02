import React from 'react';
import { useParams } from 'react-router-dom';

const ResultsComponent = () => {
    let {searchRes} = useParams()
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ResultsComponent;