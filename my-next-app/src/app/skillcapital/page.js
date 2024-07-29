import Box from '@mui/material/Box';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LoginPage() {
    return (
        <main >
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div className='md:ms-28 ms-5'>
                    <img className='md:ms-20 ms-5 mb-10 w-3/4 md:w-auto' src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75" alt="Logo"></img>
                    <div className='border-inherit border-2 rounded-md   shadow-lg p-6 w-full md:w-3/4 mt-5 md:ms-10'>
                        <label className='font-normal text-sm'>User Name</label>
                        <TextField className='mb-5' fullWidth id="fullWidth" />
                        <label className='font-normal text-sm'>Password</label>
                        <TextField type="password" fullWidth id="fullWidth" />
                        <Button fullWidth variant="contained" className='mt-10 mb-5 bg-gradient-to-r from-orange-300 to-pink-500'>Login</Button>
                        <div className='flex items-center'>
                            <Checkbox {...label} />
                            <span className='mt-1'>Remember Me</span>
                        </div>
                        <p className='text-center mt-20'>©2024, All rights reserved</p>
                    </div>
                </div>

                <div className=' w-1.9/3 left-[50%] mt-10'>
                <div className='mt-12 ms-15 '>
                    <h1 className='text-3xl font-bold w-3/4 text-center text-customBlue ps-10 ms-4 '>Seamlessly manage all learner data in a unified platform.</h1>
                    <p className='text-lg w-3/4 text-center font-light text-customBlue ms-10 lg:ms-14'>Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
                </div>
                    <img className='mt-10' src='https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinkcrm.d54abf0d.png&w=3840&q=75'></img>
                </div>
            </div>
        </main>
    );
}
