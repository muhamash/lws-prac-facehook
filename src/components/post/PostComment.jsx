/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import useAuth from '../../hooks/useAuth.jsx';
import { useAvatar } from "../../hooks/useAvatar";
import useAxios from '../../hooks/useAxios';
import CommentList from "./CommentList";

export default function PostComment ( { post } )
{
    const { api } = useAxios();
    const {auth} = useAuth()
    const avatar = useAvatar( post );
    // console.log( avatar, post );
    const [ comments, setComments ] = React.useState(post?.comments);
    const [ comment, setComment ] = React.useState( "" );
    const [ show, setShow ] = React.useState( false );

    const addComment = async ( event ) =>
    {
        try
        {
            const keyCode = event.keyCode;
        
            if ( keyCode === 13 )
            {
                const response = await api.patch( `http://localhost:3000/posts/${post.id}/comment`, { comment } );
                console.log( response );

                if ( response.status === 200 )
                {
                    setComments( [ ...response.data.comments ] );
                }
            }
        }
        catch ( error )
        {
            console.error( error);
        }
    };
    return (
        <div>
            {/* <!-- comment input box --> */ }
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={ `http://localhost:3000/${auth?.user?.avatar}` }
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        value={comment}
                        type="text"
                        onChange={ ( e ) => setComment( e.target.value ) }
                        onKeyDown={(e) => addComment(e)}
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>
            {/* <!-- comment filter button --> */ }
            <div className="mt-4 flex">
                <button onClick={ () => setShow( !show ) } className="text-gray-300 max-md:text-sm ">
                    All Comment ▾
                </button>
            </div>
            {
                show && (
                    <CommentList comments={ comments } />
                )
            }
        </div>
    );
}
