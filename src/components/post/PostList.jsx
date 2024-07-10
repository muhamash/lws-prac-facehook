/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import ProfilePost from "../profile/ProfilePost";

export default function PostList({posts}) {
  return (
    <>
      {
        posts?.map( ( post ) => (
          <ProfilePost key={ post?.id } post={ post } />
        ))
      }
    </>
  )
}
