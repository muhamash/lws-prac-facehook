// import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";

const PrivateRoutes = () =>
{
    const { auth } = useAuth()
    return (
        <>
            { auth?.authToken ? (
                <>
                    <PostProvider>
                        <ProfileProvider>
                            <Header />
                            <main className="mx-auto max-w-[1020px] p-5">
                                <div className="container">
                                    <Outlet />
                                </div>
                            </main>
                        </ProfileProvider>
                    </PostProvider>
                </>
            ) : (
                <Navigate to="/login" />
            ) }
        </>
    );
};

export default PrivateRoutes;