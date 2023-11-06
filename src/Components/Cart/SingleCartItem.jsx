import React from "react";
import CartItemCounter from "./CartItemCounter";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../Redux/Slices/UserSlice";
import { Link } from "react-router-dom";

export default function SingleCartItem ({item}) {
    const dispatch = useDispatch()
    return(
        <div className=" bg-mainColor flex flex-col tablet:flex-row gap-3 tablet:gap-0 items-center justify-between px-5 py-5 rounded-xl mb-10">
            <Link to={`/products/${item.id}`} className="flex justify-start items-center gap-3">
                <div className=" truncate w-[180px] h-[100px] rounded-lg">
                    <img src={item.images?.[1]} className="my-[-35px]"/>
                </div>
                <div>
                    <div className="text-white sm-tablet:text-base text-sm font-bold mb-2">{item.title}</div>
                    <div className=" text-greyText sm-tablet:text-sm text-vsm">{item.category.name}</div>
                </div>
            </Link>
            <div className="text-white font-bold sm-tablet:text-3xl text-xl">{item.price}$</div>
            <CartItemCounter id={item.id} amount={item.amount} />
            <div className="text-secondaryColor font-bold sm-tablet:text-3xl text-xl">{item.price * item.amount}$</div>
            <button onClick={() => dispatch(deleteItemFromCart(item.id))}><i className="fa-solid fa-square-minus text-darkerGreyText text-2xl"></i></button>
        </div>
    )
}