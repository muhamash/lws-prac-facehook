// import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () =>
{
    const {auth} = useAuth()
    return (
        <>
            { auth?.user ? (
                <main className="mx-auto max-w-[1020px] p-5">
                    <div className="container">
                        <Header/>
                        <Outlet/>
                    </div>
                </main>
            ) : (
                <Navigate to="/login" />
            ) }
        </>
    );
};

export default PrivateRoutes;