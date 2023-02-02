import "./AddMovie.css"
import React, {useState} from "react";
import axios from "axios";

const AddMovie = ( )=> {
    const [movie,setMovie]=useState();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleSubmit = (event) => {//odbieranie eventów
        event.preventDefault();//zabezpieczenie przed ciagłym odswieżaniem

        axios({//łaczenie z serwerem
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: {
                title: movie.title,
                content: movie.content,
                image:movie.image
            }
        }).then((response) => {

        }).catch((error) => {
            const errors = {};
            //errors.password = 'Given login does\'t exists or password is wrong!';
            console.log(error);
        });
    };
    return (
        <div>
            <h1>add movie</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <input value={movie?.title}
                           name="title"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="title"
                           aria-describedby="emailHelp"
                           placeholder="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">content</label>
                    <input value={movie?.content}
                           name="content"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="content"
                           placeholder="content"/>

                </div>
                <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input value={movie?.image}
                           name="image"
                           onChange={handleChange}
                           type="text"
                           className="form-control"
                           id="image"
                           placeholder="image"/>

                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>

    )
}

export default AddMovie;
