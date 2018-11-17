import React from 'react';
/* Componente que mostra o nome do usuário que gosta de determinado filme*/
const UserWhoLikedMovie = (props) => <li key={props.id}>{props.name}</li>

export default UserWhoLikedMovie