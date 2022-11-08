import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../components/Cards/ServicesCard';
import './Services.css';

const Services = () => {
    const [size, setSize] = useState(3);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [size])

    return (
        <div>
            <h1 className='text-center my-4'>Our Amazing Services</h1>
            <div className='service-card'>
                {
                    data.map(srv => <ServicesCard
                        key={srv._id}
                        srv={srv}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;