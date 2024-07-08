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
  const { state, dispatch } = useProfile()

  // const [ user, setUser ] = React.useState( null );
  // const [ post, setPost ] = React.useState( [] );
  // const [ loading, setLoading ] = React.useState( false );
  // const [ error, setError ] = React.useState( null );

  React.useEffect( () =>
  {
    dispatch( { type: actions.profile.PROFILE_DATA_FETCHING } );

    const fetchProfile = async () =>
    {
      try
      {
        const response = await api.get( `http://localhost:3000/profile/${auth?.user?.id}` );

        // setUser( response?.data?.user );
        console.log(response)
        // setPost( response?.data?.posts );
        if ( response.status === 200 )
        {
          
          dispatch( {
            type: actions.profile.PROFILE_DATA_FETCHED,
            data: response.data,
            // posts:response.data.posts
           } );
        }
      }

      catch ( error )
      {
        console.error( error );
        // setError( error );
      }

      // finally
      // {
      //   setLoading( false );
      // }
    }

    fetchProfile();
  }, [] );

  if ( state.loading ) return <div className="py-10">
    <SquareLoader
      color="#ad0a8e"
      size={100}
    />
  </div>

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <ProfileInfo />
      <ProfilePost/>
    </main>
  );
};

export default ProfilePage