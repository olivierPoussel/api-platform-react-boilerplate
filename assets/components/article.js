import React from 'react';
import { NavLink } from 'react-router-dom';

const article = (props) => {
    return ( 
        <article className="my-3">
            <p>{props.article.description}</p>
            <NavLink to={'/article/' + props.article.id} className="btn btn-primary btn-sm mt-3">En savoir plus</NavLink>
        </article>
     );
}
 
export default article;