/* eslint-disable no-unused-vars */
// import React from 'react';
import Edit from '../../assets/icons/edit.svg';
import useProfile from '../../hooks/useProfile';

const Bio = () =>
{
    const {state} = useProfile()
    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
                <p className="leading-[188%] text-gray-400 lg:text-lg">
                    { state?.user?.bio}
                </p>
            </div>
            <button className="flex-center h-7 w-7 rounded-full">
                <img src={ Edit } alt="Edit" />
            </button>
        </div>
    );
};

export default Bio;