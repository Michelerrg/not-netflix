import { useEffect } from "react";

export default function Category({setGenre, genre, setCategory, callMovie}) {

    useEffect(() => {
        if(genre === 0){
            setCategory(callMovie);
            return;
        }
        const category = callMovie.filter((movie) => movie.genre_ids.includes(genre));
        setCategory(category);
    }, [genre]);

    return(
            <div>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(0)}>All</button>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(12)}>Adventure</button>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(35)}>Comedy</button>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(14)}>Fantasy</button>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(27)}>Horror</button>
                <button className="btn btn-outline-secondary rounded-pill mx-5" onClick={() => setGenre(53)}>Thriller</button>
            </div>
    )
}