import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from '../components/AllServices/AllServices';

const TotalServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <div className='service-card mt-4'>
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