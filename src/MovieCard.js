import React from 'react';
import UsersWhoLikedMovieList from './UsersWhoLikedMovieList';
/* Componente que mostrar detalhes do filme e a lista de fãs */
const MovieCard = (props) => {	
    return (<div>
        <h2>{props.name}</h2>
        <p>Liked By:</p>
        <ul>
            <UsersWhoLikedMovieList users={props.users}/>
        </ul>
    </div>)
}

export default MovieCard