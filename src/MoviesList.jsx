import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./App.css"

function MoviesList(props) {
    const [moviesList, setMoviesList] = useState([])
    const [searchInp, setSearchInp] = useState("")
    const [rerender, setRerender] = useState(false)
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const fetchSearch = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${activePage}`, {
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
    }, [rerender])

    const fetchSearchData = async () => {
        try {
            const fetching = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchInp}&page=1`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '39a03479-7407-422c-a2d2-53e12c9654cd',
                    'Content-Type': 'application/json',
                },
            })

            const response = await fetching.json()
            setMoviesList(response)
            console.log(response);

        } catch (e) {
            console.log("Here... smth error")
        }
    }

    return (
        <BrowserRouter>
            <div>
                <Link onClick={() => setRerender(!rerender)} to="/">Home</Link>
                <div className="flex justify-center m-2">
                    <input onKeyPress={(e) => {
                        if (e.key == "Enter") {
                            fetchSearchData()
                        }
                    }} className="text-black p-1" type="text" onChange={(e) => setSearchInp(e.target.value)} value={searchInp} />
                </div>
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
                            <Link to={`https://kinopoiskk.ru/film/${it.filmId}`} className="bg-orange-600 p-2 cursor-pointer rounded-xl" target="_blank">Watch</Link>
                        </div>
                    </div>
                ))}
            </div>
        </BrowserRouter>
    );
}

export default MoviesList;