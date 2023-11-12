import React from 'react';
interface Heading {
    tag: string;
    text: string;
  }
const Heading: React.FC<Heading>= ({ tag, text }) => {
  const Tag = tag as keyof JSX.IntrinsicElements || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;
