import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CatalogPage from './components/pages/CatalogPage';


const App = () => (
    <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/catalog" exact component={CatalogPage}/>
    </div>
);


export default App;
