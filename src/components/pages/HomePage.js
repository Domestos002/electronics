import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Home page</h1>
        <Link to="/catalog">Catalog</Link>
    </div>
);

export default HomePage;