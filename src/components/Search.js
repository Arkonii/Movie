import React, {useState} from 'react';
import './Search.css';

const Search = (props) => {
    const [state, setState] = useState('')

    return (
        <div className="flex1">
            <form>
                <input onChange type="text" placeholder="Szukaj..." name="search"/>
            </form>
        </div>
    );
};

export default Search;