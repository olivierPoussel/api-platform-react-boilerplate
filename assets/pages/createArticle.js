import React, { useState } from 'react';
import Field from '../components/form/field';
import articlesApi from '../services/articlesApi';
import formService from '../services/formService';

const CreateArticle = ({history}) => {
    const [article, setArticle] = useState({
        title:"",
        description:"",
        content:""
    });

    const [error, setError] = useState('');

    const handleChange = (event) => formService.handleChange(event, article, setArticle);

    const handleSubmit = (event) => {
        event.preventDefault();

        articlesApi.create(article).then((id) => {
            setError("");
            history.push('/article/'+id);
        })
    }

    return ( 
        <>
            <h1 className="text-center my-5">Create Article</h1>
            <form onSubmit={handleSubmit} className="container">
                <Field 
                    value={article.titre} 
                    onChange={handleChange} 
                    type='text' 
                    placeholder="titre" 
                    name="title" 
                />
                <Field 
                    value={article.description} 
                    onChange={handleChange} 
                    type='text' 
                    placeholder="description" 
                    name="description" 
                />
                <Field 
                    value={article.content} 
                    onChange={handleChange} 
                    type='text' 
                    placeholder="content" 
                    name="content" 
                />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </> 
    );
}
 
export default CreateArticle;