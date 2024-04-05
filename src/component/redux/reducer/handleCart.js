const cart = [];

const handleCart = (state = cart,action) => {
    const product = action.payload;
    switch (action.type) {
      case "ADDITEM":
        //check product ton tai chua
        const exist = state.find((item) => item.id === product.id);
        if (exist) {
          //tang so luong
          return state.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                  total: (item.qty + 1) * item.price,
                }
              : { ...item, total: item.price * item.qty }
          );
        } else {
          const product = action.payload;
          return [
            ...state,
            {
              ...product,
              qty: 1,
            },
          ];
        }
        break;

       
      case "DELITEM":
        const exist1 = state.find((item) => item.id === product.id);
        if (exist1.qty === 1) {
          return state.filter((item) => item.id !== exist1.id);
        } else {
          return state.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  qty: item.qty - 1,
                  total: (item.qty - 1) * item.price,
                }
              : { ...item, total: item.price * item.qty }
          );
        }
        break;

      default:
        return state;
        break;
    }
};

export default handleCart;