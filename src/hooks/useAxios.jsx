/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { api } from '../api';
import useAuth from '../hooks/useAuth.jsx';

const useAxios = () =>
{
    const {auth, setAuth} = useAuth()
    React.useEffect( () =>
    {
        // request interceptor
        const requestIntercept = api.interceptor.request.use(
            ( config ) =>
            {
                const authToken = auth?.authToken;
                if ( authToken )
                {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                console.log( config );

                return config;
            },

            ( error ) => Promise.reject( error )
        );


        // response interceptor
        const responseInterceptor = api.interceptor.response.use(
            ( response ) => response,
            async ( error ) =>
            {
                const mainRequest = error.config;
                if ( error.response.status === 401 && !mainRequest._retry )
                {
                    mainRequest._retry = true;
                    try
                    {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post( `http://localhost:3000/auth/refresh-token`, { refreshToken } );

                        const { token } = response.data
                        console.log( 'new token', token );
                        setAuth( { ...auth, authToken: token } );
                        mainRequest.headers.Authorization = `Bearer ${token}`;

                        return axios( mainRequest )
                    }
                    catch ( error )
                    {
                        console.log( error );
                        throw error;
                    }
                }

                return Promise.reject( error );
            }
        );

        return () =>
        {
            api.interceptor.request.eject( requestIntercept );
            api.interceptor.response.eject( responseInterceptor );
        }
    }, [auth.authToken] );

    return (
        {api}
    );
};

export default useAxios;