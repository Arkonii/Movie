import './Movie.css'

const Movie = ({movie}) => {
    return (
        <div className={'movieViewContainer'}>
            <img src={require('../tit2.jpg')} className='movieView' alt='nie dzialam' />
            <div className={'flex1'}>
                <p className={'movieTitle'}>{movie.title}</p>
                <p className={'movieDesc'}>{movie.desc}</p>
            </div>
        </div>
    )
}

export default Movie