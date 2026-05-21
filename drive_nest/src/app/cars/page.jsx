import ExploreCars from '@/components/cards/ExploreCars';
import { getCars } from '@/lib/mongodb';
import React from 'react';

const page = async () => {
    const data = await getCars();
    return (
        <div>
            <h2>Data Lenght:{data.length}</h2>
            <ExploreCars/>
        </div>
    );
};

export default page;