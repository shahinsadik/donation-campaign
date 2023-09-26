import React from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div>
            <h1 className='text-3xl font-bold text-center'>404 Error</h1>
            <h2 className='text-3xl font-bold text-center mb-10 '>Page Not Found</h2>
            <Link className='text-center text-white font-bold p-2 flex justify-center items-center hover:bg-green-800 bg-green-600 rounded-md' to="/"> Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;