/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import Comment from '../../assets/icons/comment.svg';
import Like from '../../assets/icons/like.svg';
import Share from '../../assets/icons/share.svg';

export default function PostAction({post}) {
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/* <!-- Like Button --> */}
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={Like} alt="Like" />
                <span>Like</span>
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
