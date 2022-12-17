import './App.css';
import Footer from "./components/Footer";
import Bar from "./components/Bar";
import Movie from "./components/Movie";

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

const App = () => {
    return (
        <div className="App">
            <Bar/>
            <div style={{justifyContent: "space-around", width: "100%", height: "100", display: "flex", marginTop: "5rem", gap: "3rem", flexWrap: "wrap"}}>
                {
                    movies.map(movie =>
                        <Movie movie={movie}/>
                    )
                }
            </div>



            <Footer/>
    </div>
)
}

export default App;
