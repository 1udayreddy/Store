import React, { useState, useContext } from 'react'
import { Button, Modal, Navbar } from 'react-bootstrap'
import { CartContext } from './CartContext'
import AddCart from './pages/AddCart'
function NavbarComponent() {
  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url)
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Eccommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>Cart ({productsCount}) Item</Button>
        </Navbar.Collapse>

      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {productsCount > 0 ?
            <>
              <p>Items in your cart</p>
              {cart.items.map((currentProduct, idx) => (
                <AddCart key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></AddCart>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success' onClick={checkout}>purchase items!</Button>
            </>
            :
            <h1>There are no items in a cart!</h1>

          }
          <h1>This is the modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent;