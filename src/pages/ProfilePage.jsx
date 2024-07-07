/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';

const ProfilePage = () =>
{
  const { api } = useAxios();
  const { auth } = useAuth();

  const [ user, setUser ] = React.useState( null );
  const [ post, setPost ] = React.useState( [] );
  const [ loading, setLoading ] = React.useState( false );
  const [ error, setError ] = React.useState( null );

  React.useEffect( () =>
  {
    setLoading( true );
    const fetchProfile = async () =>
    {
      try
      {
        const response = await api.get( `http://localhost:3000/profile/${auth?.user?.id}` );

        setUser( response?.data?.user );
        setPost( response?.data?.posts );
      }

      catch ( error )
      {
        console.error( error );
        setError( error );
      }

      finally
      {
        setLoading( false );
      }
    }

    fetchProfile();
  }, [] );

  if ( loading ) return <div>loading...</div>

  return (
    <div>
      {
      user?.firstName
      }
    </div>
  );
};

export default ProfilePage