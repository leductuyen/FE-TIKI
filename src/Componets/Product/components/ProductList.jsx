import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import Product from './Product';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    ButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
        fontWeight: '500',
    },
    ButtonStyles: {
        cursor: 'pointer',
        display: 'inline-block',
        width: '240px',
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid rgb(13, 92, 182)',
        color: 'rgb(13, 92, 182)',
        fontSize: '13px',
        textAlign: 'center',
    },
}));
function ProductList({ data }) {
    const classes = useStyles();
    const [loadMoreItem, setLoadMoreItem] = useState(28);
    const slice = data.slice(0, loadMoreItem);
    const handleloadMore = () => {
        setLoadMoreItem(loadMoreItem + loadMoreItem);
    };
    return (
        <Box>
            <Grid container>
                {slice?.map((product) => (
                    <Grid item key={product.ProductId}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.ButtonBox}>
                <Button className={classes.ButtonStyles} onClick={() => handleloadMore()}>
                    Xem Thêm
                </Button>
            </Box>
        </Box>
    );
}

export default ProductList;
