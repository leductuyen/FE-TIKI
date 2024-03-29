import React from 'react';
import Header from '../../Componets/Header/Header';
import Banner from '../../Componets/Banner/Banner';
import CategoryItems from '../../Componets/CategoryItems/CategoryItems';
import ProductFeature from '../../Componets/Product';
import { Route, Switch } from 'react-router-dom';
import Footer from '../../Componets/Footer';

function Home() {
    return (
        <>
            <Header />
            <CategoryItems />
            <Switch>
                <Route path="/" component={Banner} exact />
            </Switch>
            <ProductFeature />
            <Footer />
        </>
    );
}

export default Home;
