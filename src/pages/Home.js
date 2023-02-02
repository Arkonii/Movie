import Movie from "../components/Movie";
import {useEffect, useState} from "react";
import {getMovies} from "../api/controller";



const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        //setMovies(getMovies())
        getMovies().
            then(data=>setMovies(data.data));
    }, [])
    return (
        <div className="App">
            <div style={{
                justifyContent: "space-around",
                width: "100%",
                height: "100",
                display: "flex",
                marginTop: "5rem",
                gap: "3rem",
                flexWrap: "wrap"
            }}>
                {
                    movies?.map(movie =>
                        <Movie movie={movie}/>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
