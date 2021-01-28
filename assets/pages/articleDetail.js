import React, { useEffect, useState } from 'react';
import articlesApi from '../services/articlesApi';

const ArticleDetail = ({match}) => {
    const [article, setArticle] = useState({
        title:"",
        description:"",
        content:""
    });

    useEffect(()=> {
        articlesApi.getArticle(match.params.id).then((article) => setArticle(article));
    },[]);
    
    return (
        <div className="container">
            <h1 className="text-center my-5">{article.title}</h1>
            <h2 className="my-3">Description</h2>
            <p>{article.description}</p>
            <h2 className="my-3">Content</h2>
            <p>{article.content}</p>
        </div>
    );
}
 
export default ArticleDetail;