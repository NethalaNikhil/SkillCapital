"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Leadstatus = [
  {
    value: 'Select Lead Status'
  },
  {
    value: 'Not Contacted'
  },
  {
    value: 'Attempted'
  },
  {
    value: 'Warm Lead'
  },
  {
    value: 'Cold Lead'
  }
];
export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='flex justify-between'>
        <div className=''>
          <label htmlFor="name">Name</label>
          <TextField className='me-10' style={{width:'31rem'}} id="name"  variant="standard" placeholder='Name' />
        </div>
        <div className=''>
          <label htmlFor="leadStatus">Leads Status</label>
          <TextField className='' style={{width:'31rem'}} id="leadStatus" variant="standard" placeholder='Leads Status' />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className=''>
          <label htmlFor="cc">CC</label>
          <TextField className='me-10' style={{width:'31rem'}} id="name"  variant="standard" placeholder='Name' />
        </div>
        <div className=''>
          <label htmlFor="leadSource">Leads Source</label>
          <TextField className='' style={{width:'31rem'}} id="leadStatus" variant="standard" placeholder='Leads Status' />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className=''>
          <label htmlFor="cc">Phone</label>
          <TextField className='me-10' style={{width:'31rem'}} id="phone"  variant="standard" placeholder='Phone' />
        </div>
        <div className=''>
          <label htmlFor="stack">Stack</label>
          <TextField className='' style={{width:'31rem'}} id="leadStatus" variant="standard" placeholder='Leads Status' />
        </div>
      </div>


    </Box>
  );
}