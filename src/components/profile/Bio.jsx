/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { actions } from '../../actions';
import FolderChecked from '../../assets/folder.png';
import Edit from '../../assets/icons/edit.svg';
import useAxios from '../../hooks/useAxios';
import useProfile from '../../hooks/useProfile';

const Bio = () =>
{
    const { state, dispatch } = useProfile();
    const { api } = useAxios();
    const [ bio, setBio ] = React.useState( state?.user?.bio );
    const [ edit, setEdit ] = React.useState( false );
    const [ loading, setLoading ] = React.useState( false );

    const handleBio = async () =>
    {
        setLoading( true );
        try
        {
            const response = await api.patch( `http://localhost:3000/profile/${state?.user?.id}`, { bio } );
            if ( response.status === 200 )
            {
                dispatch( { type: actions.profile.USER_DATA_EDIT, data: response.data } );
            }
            setEdit( false );
        } catch ( error )
        {
            console.log( error );
        } finally
        {
            setLoading( false );
        }
    };

    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="relative">
                <div className={`${loading ? ('flex-1 z-0 opacity-50 blur-sm'): 'flex-1'}`}>
                    { !edit ? (
                    <p className="leading-[188%] text-gray-400 lg:text-lg">
                        { bio }
                    </p>
                ) : (
                    <textarea
                        className="text-black"
                        value={ bio }
                        cols={ 55 }
                        rows={ 4 }
                        onChange={ ( e ) => setBio( e.target.value ) }
                    />
                ) }
                </div>
                {
                    loading && (
                <div className="absolute z-10 bottom-[40%] left-[50%]">
                    <ScaleLoader
                        color="#841492"
                        height={ 25 }
                        width={ 8 }
                    />
                </div>
            )
                }
            </div>
            { !edit ? (
                <button onClick={ () => setEdit( true ) } className="flex-center h-7 w-7 rounded-full">
                    <img src={ Edit } alt="Edit" />
                </button>
            ) : (
                <button onClick={ handleBio } className="flex-center h-7 w-7 rounded-full">
                    <img src={ FolderChecked } alt="Save" />
                </button>
            ) }
            
        </div>
    );
};

export default Bio;
