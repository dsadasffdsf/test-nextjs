import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    // const data = null;

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { posts: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
};

const users: React.FC<PostsProps> = ({ posts }) => {
  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setUsers(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                Заголовок -- {title} Тело -- {body}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default users;
