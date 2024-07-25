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
            <div className ="grid items-center grid-cols-2">

                <div className='ps-20'>
                  <img src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75"></img>
                  <div className='border boder-gray-600 shadow-lg p-6 w-2/3 mt-5'>
                     <label>User Name</label>
                     <TextField fullWidth id="fullWidth" />
                     <label>Password</label>
                     <TextField fullWidth id="fullWidth" />
                     <Button fullWidth variant="contained" className='mt-10 mb-5 bg-gradient-to-r from-orange-300 to-pink-500'>Contained</Button>
                     <div className='flex'>
                      <Checkbox {...label} />
                       <span className='mt-2.5'>Remember Me</span>
                     </div>
                     <p className='text-center mt-20'>©2024, All rights reserved</p>
                     
                  </div>
                   
                </div>

                <div>
                    <h1 className='text-3xl font-bold w-5/6 text-center text-customBlue '>Seamlessly manage all learner data in a unified platform.</h1>
                    <p className='text-lg w-5/6 text-center font-light text-customBlue '>Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
                    <img src='https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinkcrm.d54abf0d.png&w=3840&q=75'></img>
                </div>
            </div>
        </main>
    );

}