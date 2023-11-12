import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Users', path: '/users' },
  { id: 3, title: 'Posts', path: '/posts' },
];
const Header = () => {
  const {pathname} = useRouter()
  
  return (
    <nav>
      <ul className={styles.nav_wrapper}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <li className={pathname === path ? styles.active:"n-active"}>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
