/* eslint-disable no-unused-vars */
import React from 'react';
import { AuthContext } from '../context';

export default function useAuth ()
{
    const { auth } = React.useContext( AuthContext );
    React.useDebugValue( auth, auth => auth?.user ? "user logged in!" : "user Logged out!" );

    return React.useContext( AuthContext );
}