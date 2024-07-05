/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutImage from "../../assets/icons/logout.svg";
import useAuth from '../../hooks/useAuth';


export default function Logout ()
{
    const navigate = useNavigate()
    const { setAuth } = useAuth();
    return (
        <div>
            <button className="icon-btn">
                <img onClick={ () => (
                    setAuth({}),
                    navigate( '/login' )
                ) } src={ LogoutImage } alt="Logout" />
            </button>
        </div>
    );
}
