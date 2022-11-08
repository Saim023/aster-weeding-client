import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from '../components/AllServices/AllServices';

const TotalServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <h1>Total Services{allServices.length}</h1>
            <div className='service-card'>
                {
                    allServices.map(all => <AllServices
                        key={all._id}
                        all={all}
                    ></AllServices>)
                }
            </div>
        </div>
    );
};

export default TotalServices;