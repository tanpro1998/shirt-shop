import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
import number from "../../utils/number";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem d-flex flex-column p-5">
      <table className="cartItem__table">
        <thead className="cartItem__table__head">
          <tr className="cartItem__table__head__item">
            <th>Hình Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
          </tr>
        </thead>
        <tbody className="cartItem__table__body">
          {cart.map((product, index) => (
            <tr key={index}>
              <td className="cartItem__table__body__img">
                <img src={product.image01} alt="" />
              </td>
              <td className="cartItem__table__body__title">{product.title}</td>
              <td className="cartItem__table__body__price">
                {number(product.price)}
              </td>
              <td className="cartItem__table__body__quantity">
                {parseInt(product.quantity)}
              </td>
              <td>
                <i
                  className="bx bx-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(removeItem(product._id))}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
