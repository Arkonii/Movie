import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Bar from "./components/Bar";
import { isExpired } from "react-jwt";


const App = () => {
    return (
        <div>
            <Bar/>
            <div style={{marginTop: "4rem",marginBottom:"4rem", height: "100%"}}>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/details/:movieId' element={<MovieDetails/>}></Route>
                    <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie/>}/>
                    <Route path='/signin' element={<SignIn/>}></Route>
                    <Route path='/signup' element={<SignUp/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>

    )
}

export default App;
