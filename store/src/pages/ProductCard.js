import React from 'react'
import { Card , Button ,Form , Row , Col} from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
function ProductCard(props) {
    const product = props.product;
const cart = useContext(CartContext)
const ProductQuantity = cart.getProductQuantity(product.id);

const color={
    backgroundColor: "white",
    border: 'none'
}

  return (
 <Card style={color}>  
    <Card.Body>
    <Card.Img src={product.image} alt={product.title}  height={250}/>
        <Card.Title>{product.title} </Card.Title>
        <Card.Text>{product.price}</Card.Text>
        {ProductQuantity>0 ?
        <>
        <Form as={Row}>
            <Form.Label column="true" sm= "6">In Cart:{ProductQuantity}</Form.Label>
        <Col sm="6">
         <Button sm="6"  onClick={()=>cart.addOneToCart(product.id)} className='mx-2'>+</Button>
         <Button sm="6" onClick={()=>cart.removeOneFromCart(product.id)}className='mx-2'>-</Button>
         </Col>
        </Form>
        <Button variant='danger' className='mt-4' onClick={()=> cart.deleteFromCart(product.id)}>Remove from Cart </Button>
        </>
        :
        <Button variant='primary' onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>
        }
        </Card.Body>
</Card>
  )
}

export default ProductCard