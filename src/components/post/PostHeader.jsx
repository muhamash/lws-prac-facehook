/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ThreeDot from '../../assets/icons/3dots.svg';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';
import Time from '../../assets/icons/time.svg';
import { useAvatar } from '../../hooks/useAvatar';
import { getPostTime } from "../../utils";

export default function PostHeader ( { post } )
{
    const avatar = useAvatar( post );
    const [ show, setShow ] = React.useState( false );

    return (
        <header className="flex items-center justify-between gap-4">
            {/* <!-- author info --> */ }
            <div className="flex items-center gap-3">
                <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                    src={ avatar }
                    alt="avatar"
                />
                <div>
                    <h6 className="text-lg lg:text-xl">{ post?.author?.name }</h6>
                    <div className="flex items-center gap-1.5">
                        <img src={ Time } alt="time" />
                        <span className="text-sm text-gray-400 lg:text-base"
                        >{ getPostTime( post?.createAt ) } ago</span>
                    </div>
                </div>
            </div>
            {/* <!-- author info ends --> */ }

            {/* <!-- action dot --> */ }
            <div className="relative">
                <button onClick={()=> setShow(!show)}>
                    <img  src={ ThreeDot } alt="3dots of Action" />
                </button>

                {/* <!-- Action Menus Popup --> */ }
                {
                    show && (
                        <div className="action-modal-container">
                            <button className="action-menu-item hover:text-lwsGreen">
                                <img src={ Delete } alt="Edit" />
                                Edit
                            </button>
                            <button className="action-menu-item hover:text-red-500">
                                <img src={ Edit } alt="Delete" />
                                Delete
                            </button>
                        </div>
                    )
                }
            </div>
            {/* <!-- action dot ends --> */ }
        </header>
    );
}
