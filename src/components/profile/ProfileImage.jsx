/* eslint-disable no-unused-vars */
import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { actions } from '../../actions';
import Edit from '../../assets/icons/edit.svg';
import useAxios from '../../hooks/useAxios';
import useProfile from "../../hooks/useProfile";

export default function ProfileImage ()
{
    const { state, dispatch } = useProfile();
    const { api } = useAxios();
     const [loading, setLoading] = React.useState(false);

    const fileUploadRef = React.useRef();

    const handleUploadImage = (event) =>
    {
        event.preventDefault();
        fileUploadRef.current.addEventListener("change", updateImageDisplay)
        fileUploadRef.current.click();
    }

    console.log( fileUploadRef, fileUploadRef.current );

    const updateImageDisplay = async () =>
    {
        setLoading( true );
        try
        {
            const formData = new FormData();
            for ( const file of fileUploadRef.current.files )
            {
                formData.append( "avatar", file )
            }

            const response = await api.post( `http://localhost:3000/profile/${state?.user?.id}/avatar`, formData );

            if ( response.status === 200 )
            {
                dispatch( { type: actions.profile.IMAGE_UPDATED, data: response.data } );
                console.log( "form data", { formData } );
                console.log( response )
            }
            
        }

        catch ( error )
        {
            dispatch( { type: actions.profile.DATA_FETCH_ERROR, error: error.message } );
        }
        finally
        {
            setLoading( false );
        }


    };

    // if ( state?.loading ) return <div>loading.......</div>
    
    return (
        <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <img
                className={ `${loading ? 'w-[150px] h-[150px] rounded-full opacity-60 blur-sm z-0' : "w-[150px] h-[150px] rounded-full z-10"}` }
                src={ `http://localhost:3000/${state?.user?.avatar}` }
                alt="user image"
            />

            <form action="">
                <button onClick={ handleUploadImage } type="submit" className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">

                    <img src={ Edit } alt="Edit" />
                </button>
                <input id="file" type="file" ref={ fileUploadRef } hidden />
                { loading &&
                    (
                        <div className="absolute z-10 top-10 left-5">
                            <PacmanLoader color="#7a0e95" />
                        </div> ) }
            </form>
            
        </div>
    );
}
