import React from 'react';

const article = (props) => {
    return ( 
        <article className="my-3">
            <p>{props.article.content}</p>
            <a href="#" className="btn btn-primary mt-3">En savoir plus</a>
        </article>
     );
}
 
export default article;