import React from 'react'
import { Block, List, Navbar, BlockTitle, Page, ListItem, AccordionContent, Link } from 'framework7-react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice'

const AccordionProducts = () => {
    const products = useSelector(getAllProducts)
    return (
        <Page >
            <Navbar title='Products Accordion' />
            <BlockTitle>
                List of All Products in Card <br />
                Total Products Found : {products.length}
            </BlockTitle>
            {products.map((product, index) => (
                <List key={product.id} accordionList >
                    <ListItem accordionItem title={product.title}>
                        <AccordionContent>
                            <Block>
                                <p>
                                    {product.description}
                                </p>
                                <img style={{ width: '100%' }} src={product.images[2]} alt="product" />
                                <Link href={`/products/${product.id}`}>Learn more about the Products</Link>
                            </Block>
                        </AccordionContent>
                    </ListItem>
                </List>
            ))}
        </Page>
    )
}

export default AccordionProducts;