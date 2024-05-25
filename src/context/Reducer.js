export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("cart state", state.cart)
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (ele, index) => ele.id !== action.payload.id
      );
      console.log("cart state", state.cart)
      return { ...state, cart: filteredCart };
      case "CHANGE_CART_QTY":
        const qtyUpdated = state.cart.filter(c => c.id === action.payload.id ? (c.qty = Number(action.payload.qty)): c.qty);
        console.log("cart data in reduce is", qtyUpdated)
         return { ...state, cart:qtyUpdated };
        
    default:
      return state;
  }
};


export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      console.log("action", action.payload)
        return {...state, sort:action.payload}
        case "FILTER_BY_STOCK":
        return {...state, byStock:!state.byStock}
        case "FILTER_BY_DELIVERY":
        return {...state, byFastDelivery:!state.byFastDelivery}
        case "FILTER_BY_SEARCH":
        return {...state, searchQuery:action.payload}
        case "CLEAR_FILTERS":
          console.log("clearing", )
        return {...state, byStock: false, byFastDelivery:false, searchQuery:"", sort: ""  }
        
    default:
      return state;
  }
};
