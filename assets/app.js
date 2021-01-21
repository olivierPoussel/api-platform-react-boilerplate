import './styles/bootstrap.min.css'
import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu'
import ListeArticle from './components/listArticle'

const App = (props) => {
    return (
        <>
            <Menu />
            <ListeArticle/>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);