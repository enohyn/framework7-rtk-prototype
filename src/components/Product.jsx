import React, { useEffect } from 'react';
import {
    Navbar,
    Page,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    Button,
    Link
} from 'framework7-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, getSingleProduct } from '../redux/slice/singleProductSlice';

import { getOneProduct } from '../services/services';


export default (page) => {
    const productId = page.id;
    const product = useSelector(getSingleProduct)
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId != null && productId > 0) {
            //before introducing middleware
            const fetchSingleData = async () => {
                const product = await getOneProduct(productId);
                dispatch(fetchSingleProduct(product));

            }
            fetchSingleData();
        }
    }, [productId])
    return (

        <Page>
            <Navbar title={`${product.title}`} />
            <BlockTitle>
                Single Product Represented in Cards <br />
                Current Product: {product.title}
            </BlockTitle>
            <Card expandable padding={false} style={{ marginTop: '32px' }}>
                <CardContent padding={false}>
                    <div
                        style={product?.thumbnail ? {
                            backgroundImage: `url(${product.thumbnail})`,
                            height: '240px',
                            width: '100%',
                            backgroundSize: 'cover'
                        } : {}}
                    />
                    <Link
                        cardClose
                        color="black"
                        className="card-opened-fade-in"
                        style={{ position: 'absolute', right: '15px', top: '15px' }}
                        iconF7="xmark_circle_fill"
                    />
                    <CardHeader style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}> <span style={{ height: '100%' }}>
                        {product?.title ? product.title : ''}
                        <br />Price:
                        ${product?.price ? product.price : ''}
                    </span>
                    </CardHeader>
                    <div className="card-content-padding">
                        <p>
                            {product?.description ? product.description : ''}
                        </p>
                        <p>
                            <Button fill round large cardClose>
                                Close
                            </Button>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Page>

    );
}
