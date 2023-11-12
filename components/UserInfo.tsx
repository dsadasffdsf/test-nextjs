import React from 'react';
import Heading from './Heading';

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

const UserInfo: React.FC<UsersProps> = ({ user }) => {
  const { name, email, address } = user || {};
  const { street, suite, city, zipcode } = address || {};
  if (!user) {
    return <Heading tag="h3" text="Empty user" />;
  }
  return (
    <>
      <Heading tag="h3" text={name} />
      <div>Почта -- {email}</div>
      <div>
        <strong>Адрес: </strong>
        {`  ${street} , ${suite} , ${city} , ${zipcode}`}
      </div>
    </>
  );
};

export default UserInfo;
