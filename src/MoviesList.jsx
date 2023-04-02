import React, { useEffect, useState } from 'react';
import "./App.css"

function MoviesList(props) {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchSearch = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '39a03479-7407-422c-a2d2-53e12c9654cd',
                    'Content-Type': 'application/json',
                },
            })
            const resp = await fetchSearch.json()
            setMoviesList(resp)
            console.log(resp);
        }
        fetchData()

    }, [])

    return (
        <div>
            {moviesList.films?.map((it, idx) => (
                <div key={idx} className="flex border border-gray-800">
                    <div id="img-min" className="mb-5 ml-5">
                        <img className="w-20" src={it.posterUrlPreview} />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-2xl">{it.nameRu}</h3>
                        <p>{it.nameEn ? it.nameEn : it.nameRu}, {it.year}, {it.filmLength}</p>
                        <p>{it.countries[0].country}, {it.genres[0].genre}</p>
                    </div>
                    <div className="text-center absolute right-5">
                        <p className="mb-2">{it.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MoviesList;