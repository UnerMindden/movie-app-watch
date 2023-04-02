import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
const SearchComponent = React.lazy(() => import('./components/SearchComponent'));

function MoviesList(props) {
    const [moviesList, setMoviesList] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [currentMovies, setCurrentMovies] = useState([])
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '39a03479-7407-422c-a2d2-53e12c9654cd',
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            setMoviesList(data)
            setCurrentMovies(prevMovies => [...prevMovies, ...data.films]) // Update currentMovies state variable            console.log(data);
        }
        fetchMovies()

    }, [page])

    function handleHomeClick() {
        setSearchResults([]) // Reset search results
        setCurrentMovies(moviesList.films) // Set the current list of movies to the original list
        setError(false);
    }

    const handleScroll = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => { 
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div>
            <nav className="flex justify-start space-x-2">
                <Link onClick={handleHomeClick} to="/" className="text-gray-400 hover:text-gray-200">Home</Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchComponent setError={setError} setCurrentMovies={setCurrentMovies} setSearchResults={setSearchResults} />
            </Suspense>
            {error ? (
                <div>Ничего не найдено</div>
            ) : (currentMovies.map((it, idx) => (
                <div key={idx} className="flex border border-gray-800">
                    <div id="img-min" className="flex justify-center m-2">
                        <img className="w-20" src={it.posterUrlPreview} />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-2xl">{it.nameRu}</h3>
                        <p>{it.nameEn ? it.nameEn : it.nameRu}, {it.year}, {it.filmLength}</p>
                        {/* <p>{it.countries[0].country}, {it.genres[0].genre ? it.genres[0].genre : null}</p> */}
                    </div>
                    <div className="text-center absolute right-5">
                        <p className="mb-2">{it.rating}</p>
                    </div>
                </div>
            )))}
        </div>
    );
}

export default MoviesList;