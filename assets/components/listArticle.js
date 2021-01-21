import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from './article';

const listArticle = () => {
    const [listArt, setListArt] = useState([]);
    
    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/articles";
        axios.get(url, {
            headers: {
            'Accept': 'application/json'
          }}
            )
        .then((response) =>{
            console.log(response.data);
            setListArt(response.data);
            console.log(listArt);
        })
        .catch((error) => { console.log(error)})
    },[])

    return ( 
        <div className="container mt-5">
            <h1>Liste des articles</h1>
            {listArt.map((article)=>{
                return <Article key={article.id} article={article} />
            })}
        </div>
     );
}
 
export default listArticle;