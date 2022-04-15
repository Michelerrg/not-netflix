export default function Movie({movie}) {

    return(
            <div className="card col-lg-3 my-2 text-light bg-dark">
                <img src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} className="card-img-top" alt="movie"/>
                <div className="card-title">
                    <p className="fs-5 fw-bold">{movie.title}</p>
                </div>
                <div className="card-body">	
                    <div className="card-text">
                        <p></p>
                    </div>
                    <div className="card-text">
                        <p>ROBE</p>
                    </div>
                    <div className="card-footer text-end">
                        <button className="btn btn-danger">&#9655;</button>
                    </div>
                </div>
            </div>
        );
}