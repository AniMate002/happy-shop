import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, toggleModalWindow } from "../../Redux/Slices/UserSlice";


export default function UserPage (){
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(currentUser)
    return(
        <div className="dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor w-[400px] shadow-2xl dark:shadow-secondaryColor shadow-LightBlueSecondaryColor rounded-lg dark:border-secondaryColor border-LightBlueSecondaryColor px-10 py-10">
            <h1 className="text-center dark:text-white text-LightBlueSecondaryColor font-bold text-2xl mb-10">{currentUser.name}</h1>

            <p className=" text-greyText text-lg mb-4">ID: {currentUser.id}</p>
            <p className=" text-greyText text-lg mb-4">Role: {currentUser.role}</p>
            <p className=" text-greyText text-lg mb-4">Email: {currentUser.email}</p>
            <p className=" text-greyText text-lg mb-10">Created: {currentUser.creationAt}</p>
            <button onClick={() => dispatch(logOutUser())} className="text-white w-full dark:bg-secondaryColor bg-LightBlueSecondaryColor dark:hover:bg-white hover:bg-secondaryDarkColor dark:hover:text-secondaryColor transition-all cursor-pointer px-7 py-2 block mx-auto rounded-lg mb-4">Log out</button>
            <button onClick={()=> dispatch(toggleModalWindow(false))} className="text-white bg-darkerGreyText cursor-pointer w-full px-7 py-2 block mx-auto rounded-lg ">Close</button>



        </div>
    )
}