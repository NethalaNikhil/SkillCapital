import Box from '@mui/material/Box';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LoginPage() {
    return (
        <main className="flex min-h-screen bg-white">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div className='md:ms-28 ms-5'>
                    <img className='md:ms-20 ms-5 mb-10 w-3/4 md:w-auto' src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75" alt="Logo"></img>
                    <div className='border rounded border-gray-600 shadow-lg p-6 w-full md:w-3/4 mt-5 md:ms-10'>
                        <label>User Name</label>
                        <TextField className='mb-5' fullWidth id="fullWidth" />
                        <label>Password</label>
                        <TextField type="password" fullWidth id="fullWidth" />
                        <Button fullWidth variant="contained" className='mt-10 mb-5 bg-gradient-to-r from-orange-300 to-pink-500'>Login</Button>
                        <div className='flex items-center'>
                            <Checkbox {...label} />
                            <span className='mt-2.5'>Remember Me</span>
                        </div>
                        <p className='text-center mt-20'>©2024, All rights reserved</p>
                    </div>
                </div>

                <div className='w-full md:w-3/4 mx-auto mt-3 md:mt-0 seconddiv'>
                    <div className='mt-12 md:ms-6'>
                        <h1 className='text-2xl md:text-3xl font-bold w-full md:w-3/4 text-center text-customBlue md:ps-10 ms-4'>Seamlessly manage all learner data in a unified platform.</h1>
                        <p className='text-base md:text-lg w-full md:w-3/4 text-center font-light text-customBlue md:ms-14'>Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
                    </div>
                    <img className='mt-10 mx-auto w-3/4 md:w-full' src='https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinkcrm.d54abf0d.png&w=3840&q=75' alt="CRM Illustration"></img>
                </div>
            </div>
        </main>
    );
}
