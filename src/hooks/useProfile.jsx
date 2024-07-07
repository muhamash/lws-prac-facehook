import React from 'react';
import { ProfileContext } from '../context';

const useProfile = () => {
    return (
        React.useContext( ProfileContext )
    );
};

export default useProfile;