import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}
interface UsersProps {
  users: User[];
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;
    // const data = null;

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { users: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
};

const users: React.FC<UsersProps> = ({ users }) => {
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
      <h1>users</h1>
      <ul>
        {users &&
          users.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/users/${id}`}>
                Имя -- {name} Почта -- {email}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default users;
