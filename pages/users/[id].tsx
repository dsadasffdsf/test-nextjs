import UserInfo from '@/components/UserInfo';
import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
interface UsersProps {
  user: User;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.data;

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user: data },
  };
};
const user: React.FC<UsersProps> = ({ user }) => {
  return (
    <>
      <div>Пользователь</div>
      <UserInfo user={user} />
    </>
  );
};

export default user;
