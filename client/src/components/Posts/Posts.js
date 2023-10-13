import React from 'react'
import Post from './Post/Post';
import makeStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = makeStyles();

  console.log(posts)
  return (
    <>
        <h1>Posts</h1>
        <Post />
        <Post />
    </>
  );
}

export default Posts;
