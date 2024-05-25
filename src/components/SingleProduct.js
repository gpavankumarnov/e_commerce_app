import React, { useContext} from "react";
import { Card, Button } from "react-bootstrap";

import { Cart } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);

 
 console.log("cart state", cart)


  const handleBtn = (prod, type) => {
    console.log('receiveing', prod)
    if(type === "add"){
    dispatch({type:"ADD_TO_CART", payload:prod})
    }else{
      dispatch({type:"REMOVE_FROM_CART", payload:prod})
    }
  }

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: "10" }}>
            <span>Rs {prod.price.split(".")[0]}</span>
           
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
          <Button onClick={() => handleBtn(prod, "remove")} variant="danger">Remove from Cart</Button>
          /* disabled : prod.inStock don't have value like 0 then true else false */
          )
          : 
          (<Button onClick={() => handleBtn(prod, "add")} disabled={!prod.inStock} variant="primary">
            {!prod.inStock ? "Out of stock" : "Add to Cart"}
          </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
