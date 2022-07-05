import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productApi from '../../../../api/product';

import Styles from './ProductDetail.module.scss';

function ProductDetail(props) {
    const {
        params: { productId },
    } = useRouteMatch();

    const [items, setItems] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.get(productId);
                setItems(result);
            } catch (error) {
                console.log('Feild', error);
            }
        })();
    }, [productId]);
    return (
        <div className={Styles.Container}>
            <div className={Styles.Wrapper}>
                <div className={Styles.Left}>
                    <div className={Styles.GroupImages}>
                        <div className={Styles.Thumbnail}>
                            <div className={Styles.ItemsImage}>
                                <img
                                    src="https://salt.tikicdn.com/cache/400x400/ts/product/15/98/92/e6d0c5d3b51b5f8fd348969e12a8f465.jpg.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.ReviewImages}></div>
                </div>
                <div className={Styles.Bottom}></div>
                <div className={Styles.Right}>
                    <div className={Styles.Header}>
                        <h1>
                            Áo phông nam nữ unisex tay lỡ thun form rộng teen cổ tròn oversize cotton giá rẻ basic đen
                            trắng tee pull freesize PREFTED
                        </h1>
                    </div>
                    <div className={Styles.Body}>
                        <div className={Styles.BodyLeft}>
                            <div className={Styles.Price}>
                                <div>
                                    <div className={Styles.ProductPrice}>
                                        <div className={Styles.CurrentPrice}>51.000 đ</div>
                                        <div className={Styles.ListPrice}>118.000 đ</div>
                                        <div className={Styles.DiscountRate}>-57%</div>
                                    </div>
                                </div>
                                <div className={Styles.FreeShip}>
                                    <div className={Styles.Item}>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
                                            alt=""
                                        />
                                    </div>
                                    <h1>Miễn phí vận chuyển</h1>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className={Styles.BodyRight}>
                            <div className={Styles.Title}>
                                <div>hello</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
