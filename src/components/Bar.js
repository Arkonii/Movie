import './Bar.css'
import Logo from "./Logo";
import Search from "./Search";
import {Link, Navigate} from "react-router-dom";
import {isExpired} from "react-jwt";
import AddMovie from "../pages/AddMovie";
import { redirect } from "react-router-dom";


const Bar = (props) => {
    return (
            <div className='bar'>
                <Logo/>
                <Search setSearch={props.setSearch}/>
                {isExpired(localStorage.getItem('token')) ? <div>
                    <Link to="/signin">SignIn</Link>
                    <Link to="/signup">SignUp</Link>
                </div> : <div>
                    <Link to="/add">Add a movie</Link>
                    <button onClick={() => {
                        localStorage.removeItem('token')
                        window.location.reload();
                    }}>Log out</button>
                </div>}


            </div>
    );
}

export default Bar;
