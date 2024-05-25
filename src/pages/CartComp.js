import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../context/Context";
import { Button,  Col, Form, Image, ListGroup, Row } from "react-bootstrap";
// import Rating from "../components/Rating";
import { AiFillDelete } from "react-icons/ai";

const CartComp = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((accum, curr) => accum + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);



  const handleDelete = (prod) => (
dispatch({type:'REMOVE_FROM_CART', payload:prod})
  )

  const handleQtyChange = (prod, value) => {
    console.log("value", value)
    dispatch({type:'CHANGE_CART_QTY', payload:{id: prod.id, qty:value}})
  }

  return (
    <div className="cartpage">
      <div className="productContainer">
        <ListGroup>
          {cart &&
            cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{prod.price}</span>
                  </Col>
                  <Col md={2}>
                    {/* <Rating rating={prod.ratings} /> */}
                  </Col>
                  <Col md={2}>
                    <Form.Select as="select" value={prod.qty} onChange={(e) => handleQtyChange(prod, e.target.value)}>
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button variant="light" onClick={() => handleDelete(prod)}>

<AiFillDelete fontSize="20px"/>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartComp;
