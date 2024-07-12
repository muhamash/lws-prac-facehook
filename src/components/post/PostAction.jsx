/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Comment from '../../assets/icons/comment.svg';
import Like from '../../assets/icons/like.svg';
import setLikeI from '../../assets/icons/notification.svg';
import Share from '../../assets/icons/share.svg';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

export default function PostAction ( { post } )
{
    const { api } = useAxios();
    const { auth } = useAuth();
    const [ like, setLike ] = React.useState(post?.likes?.includes(auth?.user?.id));
    

    const handleLike = async() =>
    {
        try
        {
            const response = await api.patch( `http://localhost:3000/posts/${post.id}/like` );

            if ( response.status === 200 )
            {
                console.log(response.data)
                setLike( !like );
            }

        }
        catch ( error )
        {
            console.log( error );
            setLike( false );
        }
    }

    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/* <!-- Like Button --> */}
            <button
                onClick={handleLike}
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={like ? setLikeI : Like} alt="Like" />
                <span>{ like && "Liked" }</span>
            </button>

            {/* <!-- Comment Button --> */}
            <button
                className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm"
            >
                <img src={Comment} alt="Comment" />
                <span>{ post?.comments.length }</span>
            </button>
            {/* <!-- Share Button --> */}

            {/* <!-- Like Button --> */}
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={Share} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
}
