import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

function MoviesOMDB(props) {
    const [dataMovie, setDataMovie] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const fetchData = async () => {
        const apiKey = "45471802"
        const resp = await fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=${apiKey}`)
        const data = await resp.json()

        setDataMovie(data);
        console.log(data)
    }

    return (
        <div>
        <h1>Hello</h1>
            <input onKeyPress={(e) => {
                if (e.key == "Enter") {
                    fetchData()
                }
            }}
                className="text-black"
                type="text"
                onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
            <div>
                {dataMovie.Title}
                <img src={dataMovie.Poster} />
            </div>
        </div>
    );
}

export default MoviesOMDB;