import React, { useContext } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cart } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";

const Header = () => {
  const {
    state: { cart },
    dispatch, filterState:{searchQuery}, filterDispatch
  } = useContext(Cart);

  console.log("searchquery", searchQuery)

  const handleClick = (prod) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: prod });
  };

  return (
    //Bootstrap component has -> Navbar
    <Navbar
      bg="dark"
      variant="dark"
      style={{ height: "5rem", position: "sticky", top: "0", zIndex: "2" }}
    >
      {/* Bootstrap Container aligns to center. */}
      <Container>
        {/* Bootstrap Navbar.brand for logo */}
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        {/* Bootstrap Search component */}
        <Navbar.Text className="search">
          {/* inputtag = FormControl in bootstrap */}
          <FormControl
            style={{ width: 500 }}
            placeholder="search"
            className="m-auto"
            onChange={(e)=> filterDispatch({
              type:"FILTER_BY_SEARCH",
              payload: e.target.value
            }) }
          />
        </Navbar.Text>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                minWidth: "370px",
                position: "absolute",
                left: "-18rem",
                 padding: "1rem",
                
              }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(prod)}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "auto" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
