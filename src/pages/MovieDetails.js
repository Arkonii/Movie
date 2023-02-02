import "./MovieDetails.css"
import {useEffect, useState} from "react";
import {deleteMovie, getMovie, getMovies} from "../api/controller";
import {useParams} from "react-router-dom";
import {isExpired} from "react-jwt";

const MovieDetails = ()=> {
    const [movie,setMovie]=useState();
    const { movieId } = useParams();
    const deleteM=()=>{
        console.log(movieId);
        deleteMovie(movieId);
    }
    useEffect(() => {
        getMovie(movieId).
        then(data=>setMovie(data.data));
    }, [])
    return (
        <div >
            <img src={movie?.image} className='movieView' alt='nie dzialam' />
            <div className={'flex1'}>
                <p className={'movieTitle'}>{movie?.title}</p>
            </div>
            <div>
                <p>
                    {movie?.content}
                </p>
            </div>
            {!isExpired(localStorage.getItem('token')) &&
            <button onClick={deleteM}>Delete</button>}
        </div>

    )
}

export default MovieDetails;
