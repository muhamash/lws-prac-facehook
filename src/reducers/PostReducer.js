import { actions } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const PostReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case actions.post.POST_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            }
                
        }
        case actions.post.POST_DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                posts: action.data,
            }
                
        }
        case actions.post.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
                
        }
        default: {
            return state;
        }
    }
};

export { initialState, PostReducer };
