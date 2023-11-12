import React,{useEffect} from 'react';
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter()
    useEffect(() => {
    // setTimeout(() => {
    //     router.push('/')
    // }, 4000);  
    }, [router])
  return (
    <>
      <div>404 , Error</div>
      <div>Redirecting</div>
    </>
  );
};

export default Error;
