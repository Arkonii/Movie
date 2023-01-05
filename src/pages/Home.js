import Movie from "../components/Movie";

const movies = [
    {
        title: "(opis)",
        desc: "(ocena)",
        imageSrc: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        imageSrc: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        imageSrc: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        image: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        imageSrc: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        image: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        imageSrc: "../tit2.jpg"
    },
    {
        title: "(opis)",
        desc: "(ocena)",
        image: "../tit2.jpg"
    },
]

const Home = () => {
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
                    movies.map(movie =>
                        <Movie movie={movie}/>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
