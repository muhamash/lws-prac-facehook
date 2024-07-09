/* eslint-disable react/prop-types */
import React from 'react';
import { useAvatar } from "../../hooks/useAvatar";
import CommentList from "./CommentList";

export default function PostComment ( { post } )
{
    const avatar = useAvatar( post );
    // console.log( avatar, post );
    const [ comment, setComment ] = React.useState( false );

    return (
        <div>
            {/* <!-- comment input box --> */ }
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={ avatar }
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>
            {/* <!-- comment filter button --> */ }
            <div className="mt-4 flex">
                <button onClick={ () => setComment( !comment ) } className="text-gray-300 max-md:text-sm ">
                    All Comment ▾
                </button>
            </div>
            {
                comment && (
                    <CommentList comments={ post?.comments } />
                )
            }
        </div>
    );
}
