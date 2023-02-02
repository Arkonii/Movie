// const
//     https://at.usermd.net/api/user/create
//         https://at.usermd.net/api/user/auth
// https://at.usermd.net/api/user/logout/:userId
//     https://at.usermd.net/api/movies
//         https://at.usermd.net/api/movies
//             https://at.usermd.net/api/movies/61d622b26464feb8e75e2046
//                 https://at.usermd.net/api/movie/63cd70d0d3af3f39a23ac854
//
//
//
// const registerUser = ()=> (
//     axios({
//         method: 'post',
//         url: 'https://at.usermd.net/api/user/auth',
//         data: {
//             login: account.username,
//             password: account.password
//         }
//     }).then((response) => {
//         localStorage.setItem('token', response.data.token);
//         handleChangeRoute();
//     }).catch((error) => {
//         const errors = {};
//         errors.password = 'Given username does\'t exists or password is wrong!';
//         setAccount({errors: errors || {}});
//     });
// )

import axios from "axios" ;

export const getMovies = ()=>{
   return ( axios({
       method: 'get',
       url: 'https://at.usermd.net/api/movies'
   }).then((response) => response

   ).catch((error) => {
       const errors = {};
   }));
}

export const getMovie = (movieId)=>{
    return ( axios({
        method: 'get',
        url: `https://at.usermd.net/api/movies/${movieId}`
    }).then((response) => response

    ).catch((error) => {
        const errors = {};
    }));
}

export const deleteMovie = (movieId)=>{
    return ( axios({
        method: 'delete',
        url: `https://at.usermd.net/api/movie/${movieId}`
    }).then((response) => response

    ).catch((error) => {
        const errors = {};
    }));
}



