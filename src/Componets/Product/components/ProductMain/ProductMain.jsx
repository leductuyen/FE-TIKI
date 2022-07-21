import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList';
import Styles from './ProductMain.module.scss';
import productApi from '../../../../api/product';
import ProductSkeletonList from '../ProductSkeletonList';

function ProductMain(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll();
                setProductList(data);
            } catch (error) {
                console.log('Failed', error);
            }
            setLoading(false);
        })();
    }, []);
    return (
        <div className={Styles.Container}>
            <div className={Styles.ContentWrap}>
                <div className={Styles.ListPage}>
                    {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                </div>
            </div>
        </div>
    );
}

export default ProductMain;
