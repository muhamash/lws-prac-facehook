/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import PostAction from "../post/PostAction";
import PostBody from "../post/PostBody";
import PostComment from "../post/PostComment";
import PostHeader from "../post/PostHeader";

export default function ProfilePost({post}) {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={ post } />
      <PostBody post={ post } />
      <PostAction />
      <PostComment/>
    </article>
  )
}
