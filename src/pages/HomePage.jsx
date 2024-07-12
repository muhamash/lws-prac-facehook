/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { actions } from '../actions';
import NewPost from '../components/post/NewPost';
import PostList from '../components/post/PostList';
import useAxios from "../hooks/useAxios";
import usePost from '../hooks/usePost';
import { initialState, PostReducer } from '../reducers/PostReducer';

const HomePage = () =>
{
  // console.log( { React } );
  const {state, dispatch } = usePost( PostReducer, initialState );
  // const { auth } = useAuth();
  const { api } = useAxios();

  React.useEffect( () =>
  {
    dispatch( { type: actions.post.POST_DATA_FETCHING } );

    const fetchPost = async () =>
    {
      try
      {
        const response = await api.get( `http://localhost:3000/posts` );

        if ( !response.ok )
        {
          console.log( response );
          dispatch( { type: actions.post.POST_DATA_FETCHED, data: response.data } );
        }
      }
      catch ( error )
      {
        // console.log( error );
        dispatch( { type: actions.DATA_FETCH_ERROR, error: error.message } );
      }
    }

    fetchPost();
  }, [] );

  if ( state?.loading )
  {
    return <div>loading......</div>
  }

  if ( state?.error )
  {
    return <div>{ state.error.message }</div>
  }

  return (
    <div className="w-full">
      <NewPost/>
      <PostList posts={ state.posts } />
    </div>
  )
}

export default HomePage