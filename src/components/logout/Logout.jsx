/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutImage from "../../assets/icons/logout.svg";


export default function Logout ()
{
  const navigate = useNavigate()
    return (
        <div>
            <button className="icon-btn">
                <img onClick={ () => navigate( '/login' ) } src={ LogoutImage } alt="Logout" />
            </button>
        </div>
    );
}
