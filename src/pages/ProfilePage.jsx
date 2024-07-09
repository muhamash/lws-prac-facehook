/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SquareLoader } from "react-spinners";
import { actions } from '../actions';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePost from '../components/profile/ProfilePost';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import useProfile from '../hooks/useProfile';

const ProfilePage = () =>
{
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  React.useEffect( () =>
  {
    dispatch( { type: actions.profile.PROFILE_DATA_FETCHING } );

    const fetchProfile = async () =>
    {
      try
      {
        const response = await api.get( `http://localhost:3000/profile/${auth?.user?.id}` );
        if ( response.status === 200 )
        {
          console.log(response.data)
          dispatch( {
            type: actions.profile.PROFILE_DATA_FETCHED,
            data: response.data,
          } );
        }
      } catch ( error )
      {
        console.error( error );
        dispatch( { type: actions.profile.DATA_FETCH_ERROR, error: error.message } );
      }
    };

    fetchProfile();
  }, [] );

  if ( state.loading ) return <div className="py-10">
    <SquareLoader color="#ad0a8e" size={ 100 } />
  </div>;

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <ProfileInfo />
      
      <h4 className="text-left mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      {
        state?.posts?.map( ( post ) => (
          <ProfilePost key={ post.id } post={ post } />
        ))
      }
    </main>
  );
};

export default ProfilePage;
