/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-duplicate-case */
// import React from 'react';
import { actions } from '../actions';

const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null
}

const ProfileReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case actions.profile.PROFILE_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
                
            }
        }
            
        case actions.profile.PROFILE_DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts
            }
        }
        
        case actions.profile.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        
        case actions.profile.USER_DATA_EDIT: {
            return {
                ...state,
                loading: false,
                user: action.data,
            }
        }
            
        default: {
            return state
        }
    }
};

export { initialState, ProfileReducer };
