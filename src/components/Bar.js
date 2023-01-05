import './Bar.css'
import Logo from "./Logo";
import Search from "./Search";
import {Link} from "react-router-dom";

const Bar = (props) => {
    return (
            <div className='bar'>
                <Logo/>
                <Search setSearch={props.setSearch}/>
                <Link to="/add">Add a movie</Link>
                <Link to="/signin">SignIn</Link>
                <Link to="/signup">SignUp</Link>
            </div>
    );
}

export default Bar;
