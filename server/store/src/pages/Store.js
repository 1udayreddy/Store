import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../Product'
import ProductCard from './ProductCard'
import "./Store.css"
function Store() {
    return (
        <>

            <h1 align="center" className='p-3'>Welcome to store</h1>
            <Row xs={1} md={3} className='g-4'>

                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                     <ProductCard product ={product}/>
                    </Col>
                ))}



            </Row>
        </>
    )
}

export default Store