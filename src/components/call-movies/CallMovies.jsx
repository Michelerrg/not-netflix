import React, { useEffect, useState } from "react";
import Category from "../category/Category";
import Movie from "../movie/Movie";

export default function CallMovies() {

    const [callMovie, setCallMovie] = useState([]);
    const [category, setCategory] = useState([]);
    const [genre, setGenre] = useState(0);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=605900ec0aa42411b6d1f7dfaa472a12');
        const movies = await resp.json();
                
        setCallMovie(movies.results);
        setCategory(movies.results);
        console.log(movies);
       };

        return (
                <div>
                    <Category callMovie={callMovie} setCategory={setCategory} genre={genre} setGenre={setGenre}/>
                    <div className="row d-flex justify-content-evenly text-center">
                        {category.map(movie => {
                            return <Movie key={movie.id} movie={movie}/>
                        })}
                    </div>
                </div>
            );
}