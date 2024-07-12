/* eslint-disable react/prop-types */
import React from 'react';
import { PostContext } from '../context';
import { PostReducer, initialState } from '../reducers/PostReducer';


export default function PostProvider ({children})
{
    const [ state, dispatch ] = React.useReducer( PostReducer, initialState );
    
    return (
        <PostContext.Provider value={{state, dispatch}}>
          {children}
        </PostContext.Provider>
    );
}
