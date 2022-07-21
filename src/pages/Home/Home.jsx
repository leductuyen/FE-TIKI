import React from 'react';
import Header from '../../Componets/Header/Header';
import Banner from '../../Componets/Banner/Banner';
import CategoryItems from '../../Componets/CategoryItems/CategoryItems';
import ProductFeature from '../../Componets/Product';
import { Route } from 'react-router-dom';

function Home() {
    return (
        <>
            <Header />
            <CategoryItems />
            <Route path="/" component={Banner} exact />
            <ProductFeature />
        </>
    );
}

export default Home;
