import CarDetails from '@/components/details/CarDetails';
import React from 'react';



const page = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <CarDetails id={id} />
        </div>
    );
};

export default page;