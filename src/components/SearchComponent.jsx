import React, { useState } from 'react';

const SearchComponent = ({ setError, setSearchResults, setCurrentMovies }) => {
    const [searchInp, setSearchInp] = useState("")

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
            setSearchResults(response)
            setCurrentMovies(response.films) // Update currentMovies state variable
            console.log(response);

            if (response.films.length === 0) {
                setError(true)
            } else {
                setError(false)
            }

        } catch (error) {
            setError(true)
            console.log("error fetching search data:", error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetchSearchData() // Call the search function when the form is submitted
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
        </>
    );
};

export default SearchComponent;