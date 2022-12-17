import './Bar.css'
import Logo from "./Logo";
import Search from "./Search";

const Bar = (props) => {
    return (
        <div>
            <div className={'bar'}>
                <Logo/>
                <Search setSearch={props.setSearch}/>
            </div>
        </div>
    );
}

export default Bar;