import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Cart } from "../context/Context";
const Filters = () => {
  // const [rate, setRate] = useState(5);

  const {
    filterState: { byStock, byFastDelivery, sort },
    filterDispatch,
  } = useContext(Cart);
  console.log("filter state is", byStock, byFastDelivery, sort);

  const handleCheck = (type) => {
    if (type === "asc") {
      filterDispatch({
        type: "SORT_BY_PRICE",
        payload:  "asc",
      });
    } else if (type === "desc") {
      filterDispatch({
        type: "SORT_BY_PRICE",
        payload: "desc",
      });
    } else if (type === "clear") {
      filterDispatch({
        type: "CLEAR_FILTERS",
      });
    }
  };

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => handleCheck("asc")}
          checked={sort === "asc" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => handleCheck("desc")}
          checked={sort === "desc" ? true : false}
        />
      </span>

      {/* <span>
        <Form.Check
          inline
          label="Include Out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => handleCheck("stock")}
          checked={byStock}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={() => handleCheck("byFastDelivery")}
          checked={byFastDelivery}
        />
      </span> 

      <span>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={rate}
          style={{ cursor: "pointer" }}
          onRatingHandle={(index) => setRate(index + 1)}
        />
      </span>
      */}
      <Button onClick={() => handleCheck("clear")} variant="light">
        {" "}
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
