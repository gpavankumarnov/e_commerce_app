
/**

import React from "react";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
export const Rating = ({ rating, onRatingHandle, style }) => {
  return [Array(5)].map((_, index) => {
    <span key={index} onClick={() => onRatingHandle(index)} style={style}>
      {rating > index ? (
        <AiFillStar fontSize="15px" />
      ) : (
        <AiOutlineStar fontSize="15px" />
      )}
    </span>;
  });
};


export default Rating;


/**
 * To create 5 stars -> * * * * *
 * when you click on 3rd star you need those 3 stars to fill. 
 * so you create a Rating component which expects  props like - onClick function from parent(to handle), rating mainly from parent. 
 *  onClick on certain star onclick triggers in rating component call parent onClick func and 
 * if rating === 4 ? check rating > index (0,1,2,3) these are greater so render component Aifillstar.
 * 
 * 
 */