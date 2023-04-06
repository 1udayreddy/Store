
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProductData } from '../Product'


 function AddCart(props) {
    const cart = useContext(CartContext)
   const id = props.id;
  const quantity = props.quantity;
  const ProductData = getProductData(id);

return(
<>
<img src={ProductData.image} alt=""  height={50}/>
<h3>{ProductData.title}</h3>
<p>{quantity}</p>
<p>${(quantity + ProductData.price).toFixed(2)}</p>
<Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
<hr />
</>
)
 }
export default AddCart
