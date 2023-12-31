import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";

export default function CartList({isLogged}){
    const { cart } = useSelector(state => state.user)

    const renderedItems = cart.map(item => <SingleCartItem key={item.id} item={item}/>)

    const totalPrice = cart.reduce(function(accumulator, currentItem){
        return accumulator + currentItem.price * currentItem.amount
    }, 0)
    console.log(isLogged)
    return(
        <div className=" tablet:flex-1 w-full dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor tablet:px-10 tablet:py-10 px-2 py-5 rounded-lg relative mx-auto tablet:mx-0">
            <h1 className=" dark:text-white text-LightTextColor font-bold text-2xl mb-10 text-center tablet:text-left">Your cart</h1>
            {isLogged ? 
            (
                cart.length === 0 ? 
                <div className="text-center dark:text-white text-LightTextColor text-3xl font-bold mb-5">Your cart is empty <i className="fa-regular fa-face-sad-tear"></i></div> 
                :
                renderedItems
            )
            :
                <div className="text-center dark:text-white text-LightTextColor text-3xl font-bold mb-5">You should be logged to access cart <i className="fa-regular fa-face-sad-tear"></i></div>
            }

            <div className="flex justify-between flex-col gap-3 tablet:gap-0 tablet:flex-row items-center mt-60">
                <div className=" dark:text-greyText text-LightBlueSecondaryColor font-bold tablet:text-2xl">Total Price: <span className="dark:text-white text-LightTextColor">{totalPrice}$</span></div>
                <Link to={"/"} className=" sm-tablet:px-7 sm-tablet:py-3 px-5 py-1 dark:bg-secondaryColor bg-LightBlueSecondaryColor hover:bg-secondaryDarkColor rounded-lg text-white font-medium dark:hover:bg-white dark:hover:text-secondaryColor transition-all text-center">Proceed to checkout</Link>
            </div>
        </div>
    )
}