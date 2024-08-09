"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function Dashboard() {
    return (
        <div style={{ color: "#F4F6F9" }}>
            <nav className="flex justify-between mt-5 shadow-lg shadow-slate-200 p-1 border-top">
                <div className="flex ms-2 mb-2">
                    <img className="mx-2" src="/button.svg" width={35}></img>
                    <img src="/skillcapital.png" width={180} height={5}></img>
                </div>
                <div className='flex'>
                    <div className='me-2'>
                        <Button variant="outlined" className="border-0 hover-bg pb-3"><span className="text-black text-base">Home</span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Leads</span><span><img src='/downarrow.svg'></img></span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Opportunities</span><span><img src='/downarrow.svg'></img></span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Learners</span><span><img src='/downarrow.svg'></img></span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Courses</span><span><img src='/downarrow.svg'></img></span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Activites</span><span><img src='/downarrow.svg'></img></span></Button>
                        <Button variant="outlined" className='border-0 hover-bg pb-3'><span className='text-black text-base'>Analytics</span><span><img src='/downarrow.svg'></img></span></Button>
                    </div>
                    <img src='/Stars.png' width={40}></img>
                    <Button><FontAwesomeIcon icon={faBell} width={23} style={{ color: 'black' }} /></Button>
                    <Button><FontAwesomeIcon icon={faUser} width={23} style={{ color: 'black' }} /></Button>
                </div>
            </nav>
            <div >
                <div className='grid grid-cols-5 container mx-auto gap-4 p-6 '>
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
            <div className='flex flex-row mb-3'>
                <div className='ms-10 bg-white shadow-lg' >
                    <Chart
                        type='line'
                        width={1000}
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
                <div className="ms-16 container-sm w-full bg-white shadow-lg text-black ">
                    <h1 className="text-center ">Analytics</h1>
                    <div className="p-16"><h1 className="border rounded-full w-full text-center  p-32 font-bold"><p>0</p>Leads</h1></div>
                </div>
            </div>
        </div>

    );
}
