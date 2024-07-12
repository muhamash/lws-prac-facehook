import React from 'react';
import { PostContext } from '../context';

const usePost = () => {
    return (
        React.useContext(PostContext)
    );
};

export default usePost;