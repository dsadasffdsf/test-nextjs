import Socials from '@/components/Socials';
import axios from 'axios';
import  Head  from 'next/head';
import Image from 'next/image';

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.API_HOST}/socials/`);
    const data = await response.data;
    // const data = null;

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { contacts: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
};
interface Contacts {
  id: number;
  icon: string;
  path: string;
}

interface ContactsProps {
  contacts: Contacts[];
}

const Page :React.FC<ContactsProps> = ({contacts}) => {
  
  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <h1>Hello, Next.js!</h1>;
      <Image
        src="/Screenshot_12.png"
        width={400}
        height={400}
        alt="cartinka"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA"
      />
      <Socials socials={contacts} />
    </>
  );
};

export default Page;
