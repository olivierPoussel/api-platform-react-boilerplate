import React, { useEffect, useState } from 'react';
import Article from '../components/article';
import articlesApi from '../services/articlesApi';

const listArticle = () => {
    const [listArt, setListArt] = useState([]);

    useEffect(async() => {
        try {
            const articles = await articlesApi.findAll();
            setListArt(articles);
        } catch (error) {
            console.log(error)
        }
    },[])

    return ( 
        <div className="container mt-5">
            <h1>Liste des articles</h1>
            <hr/>
            {listArt.map((article)=>{
                return <Article key={article.id} article={article} />
            })}
        </div>
     );
}
 
export default listArticle;