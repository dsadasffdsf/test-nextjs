import React from 'react';
import Heading from './Heading';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsProps {
  post: Post;
}

const UserInfo: React.FC<PostsProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }
  return (
    <>
      <Heading tag="h3" text="Пост" />
      <strong>{title}</strong>
      <div>{body}</div>
    </>
  );
};

export default UserInfo;