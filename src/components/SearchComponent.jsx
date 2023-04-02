import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const SearchComponent = () => {
    const [searchInp, setSearchInp] = useState("")
    const [moviesList, setMoviesList] = useState([])

    const fetchSearchData = async () => {
        try {
            const fetching = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchInp}&page=1`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '39a03479-7407-422c-a2d2-53e12c9654cd',
                    'Content-Type': 'application/json',
                },
            })

            const response = await fetching.json();
            setMoviesList(response);
            console.log(response);

        } catch (e) {
            console.log("err.", e)
        }
    }

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        navigate(`search/${searchInp}`)
        
    }

    return (
        <>
            <div className="flex justify-center m-2">
                <form onSubmit={handleSubmit}>
                    <input
                        onKeyPress={(e) => {
                            if (e.key == "Enter") {
                                fetchSearchData()
                            }
                        }}
                        className="text-black p-1"
                        type="text"
                        onChange={(e) => setSearchInp(e.target.value)} value={searchInp} />
                </form>
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
                    </div>
                </div>
            ))}
        </>
    );
};

export default SearchComponent;