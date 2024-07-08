/* eslint-disable no-unused-vars */
import React from 'react';
import { actions } from '../../actions';
import Edit from '../../assets/icons/edit.svg';
import useAxios from '../../hooks/useAxios';
import useProfile from "../../hooks/useProfile";

export default function ProfileImage ()
{
    const { state, dispatch } = useProfile();
    const { api } = useAxios();

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
                console.log(response)
            }
            
        }

        catch ( error )
        {
            dispatch( { type: actions.profile.DATA_FETCH_ERROR, error: error.message } );
        }


    };

    return (
        <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <img
                className="w-[150px] h-[150px] rounded-full"
                src={ `http://localhost:3000/${state?.user?.avatar}` }
                alt="user image"
            />

            <form action="">
                <button onClick={ handleUploadImage } type="submit" className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">

                    <img src={ Edit } alt="Edit" />
                </button>
                <input id="file" type="file" ref={ fileUploadRef } hidden />
            </form>
        </div>
    );
}
