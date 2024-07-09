/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react';
import { useAvatar } from '../../hooks/useAvatar';

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const useAvatarUrls = (comments) => {
    return comments.map(comment => useAvatar(comment));
};

export default function CommentList({ comments }) {
    const avatars = useAvatarUrls(comments);

    return (
        <>
            {
                comments && comments.map((comment, index) => (
                    <div key={index} className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
                        <div className="flex items-center gap-3 pt-4">
                            <img
                                className="max-w-6 max-h-6 rounded-full"
                                src={avatars[index]}
                                alt="avatar"
                            />
                            <div>
                                <div className="flex gap-1 text-xs lg:text-sm">
                                    <span>{comment.author.name} : </span>
                                    <span>{comment.comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
