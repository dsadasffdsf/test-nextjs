import Head from 'next/head';
import React from 'react';

interface Socials {
  id: number;
  icon: string;
  path: string;
}

interface SocialsProps {
  socials: Socials[];
}
const Socials: React.FC<SocialsProps> = ({ socials }) => {
  if (!socials || socials.length === 0) {
    return (
      <>
        <h1>Социальные сети</h1>
        <p>Нет доступных социальных сетей.</p>
      </>
    );
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <h1>Социальные сети</h1>
      <ul>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`}></i>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;
