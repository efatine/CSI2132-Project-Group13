import { startTransition } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from "antd";
import { Link } from 'react-router-dom';

export const ImmobilizationHeader = () => {

  return (
    <header className='bg-green-700 py-6 w-full ' >
      <div className="container h-full text-white">
      
        
        <h1 className='text-4xl font-bold	mb-4'>
         Welcome To Ehotels!
        </h1>
        <h1 className='text-xl my-5 mb-6'>
        Please find anything that most suited you.
        </h1>
        <Button type="primary" className='bg-[#5794F7]'>Sign In/Register</Button>
        
       </div> 
      
    </header>
  );
};

export const ImmobilizationFooter = () => {
  const handleClick = () => {
    startTransition(() => {
    });
  };

  return (
    <footer className='bg-green-700 py-10 w-full' onClick={handleClick}>
      <div className='container text-white pt-[45px] block text-lg'>
        <div className="container mx-auto flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
            WelcomeToEhotels.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
            </span>
        </div>
      </div>
    </footer>
  );
};
