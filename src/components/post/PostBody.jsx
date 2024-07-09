/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';

const PostBody = ( { post } ) =>
{
    return (
        <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
            {/* <!-- If Post has Image, Render this block --> */ }
            {
                !post.content && <div>no post</div>
            }
            <div className="flex items-center justify-center overflow-hidden">
                {
                    post?.image && (
                        <img
                            className="max-w-full"
                            src={`http://localhost:3000/${post?.image}`}
                            alt="poster"
                        />
                    )
                }
            </div>
            <p className="py-2">
                { post?.content }
            </p>
        </div>
    );
};

export default PostBody;