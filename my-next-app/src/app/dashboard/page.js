"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import Navbar from  '../../components/navbar'


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function Dashboard() {
   
    return (
        <div style={{ color: "#F4F6F9" }}>
             <Navbar/>
            <div >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-2 mx-10 mt-5'>
                    <div className='flex border-2 border p-2 rounded-lg bg-white shadow-lg shadow-slate-200'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200  bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <img src='/person.svg'></img>
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-3">
                <div className="flex-1 bg-white shadow-lg  my-4 lg:ms-10">
                    <Chart
                        type='line'
                        width="140%"
                        height={400}
                        series={[
                            {
                                name: 'Leads',
                                data: [0.0, 0.5, 1.0, 1.5, 2.0, null, null, null, null, null, null, null, null, null, null]
                            }
                        ]}
                        options={{
                            chart: {
                                id: 'today-leads',
                                toolbar: {
                                    show: false
                                },
                                margin: {
                                    bottom: 0
                                }
                            },
                            title: {
                                text: 'Today Leads',
                                align: 'center',
                                margin: 20,
                                offsetY: 0,
                                style: {
                                    fontSize: '20px',
                                    fontWeight: 'normal',
                                    color: '#263238'
                                }
                            },
                            xaxis: {
                                categories: ['12am', '1am', '2am', '3am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '11pm'],
                                labels: {
                                    show: true,
                                    rotate: -45,
                                    hideOverlappingLabels: false,
                                    offsetX: 0,
                                    offsetY: -5
                                },
                            },
                            yaxis: {
                                tickAmount: 4,
                                labels: {
                                    formatter: function (value) {
                                        if ([0.0, 0.5, 1.0, 1.5, 2.0].includes(value)) {
                                            return value;
                                        }
                                        return '';
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <div className="flex-1 bg-white shadow-lg mx-4 my-4 lg:ms-16 me-20 text-black">
                    <p className="text-center">Analytics</p>
                    <div className="p-16">
                        <h1 className="border rounded-full border-2 border-black w-full text-center p-32 font-bold">
                            <p>0</p>
                            Leads
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};