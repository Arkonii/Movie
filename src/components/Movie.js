import './Movie.css'
import {Link} from "react-router-dom";

const Movie = ({movie}) => {

    return (
        <Link to = {`details/${movie.id}`} className={'movieViewContainer'}>

                <img src={movie.image} className='movieView' alt='nie dzialam' />
                <div className={'flex1'}>
                    <p className={'movieTitle'}>{movie.title}</p>
                    <p className={'movieDesc'}>{movie.desc}</p>
                </div>

        </Link>
    )
}

export default Movie
