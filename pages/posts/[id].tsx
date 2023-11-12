import PostInfo from '@/components/PostInfo';
import React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.data;

  const paths = data.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.data;
  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

const user: React.FC<PostsProps> = ({ post }) => {
  return (
    <>
      <div>Пользователь</div>
      <PostInfo post={post} />
    </>
  );
};

export default user;
