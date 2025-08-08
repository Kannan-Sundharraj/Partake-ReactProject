import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, addQuantity, subQuantity } from "../store/cartSlice/cartSlice";
import { Link } from "react-router-dom";

const CartItems = () => {
    const dispatch = useDispatch();
    const carts = useSelector (state => state.cart.items);
    const actionDeleteCart = (f) => {dispatch(deleteCart(f))};
    const plusItem = (j) => {dispatch(addQuantity(j))};
    const minusItem = (l) => (dispatch(subQuantity(l)));

    return(
        <div>
            <Link to='/'><h3 className="m-3">Home.</h3></Link>
            <div class="col-10 pt-3 mt-3 text-center">
                <h2 class="fw-bold">Your Cart Products</h2>
                <div className="container ps-5">
                    <div class="row">
                        {carts.map((item) =>(
                        <div class="col-lg-4 col-md-6">
                            <div class="card text-primary mb-3">
                                <div class="card-body">
                                    <img src={item?.image} class="card-img-top"/>
                                    <div class="card-title">{item?.name}</div>
                                        <div>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <b class="rate"> {item?.rating}</b>
                                        </div>
                                        <div className="d-flex justify-content-between my-3">
                                            <button className='btn btn-success fs-5 px-3' onClick={()=>minusItem(item)}>-</button>
                                            <h4><small>Quantity: </small>{item?.quantity}</h4>
                                            <button className='btn btn-success fs-5 px-3' onClick={()=>plusItem(item)}>+</button>
                                            
                                        </div>
                                    <button className='btn btn-danger' onClick={()=>actionDeleteCart(item)}>Delete from Cart</button> 
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
