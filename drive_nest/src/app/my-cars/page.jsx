
import { users } from '@/lib/data';
import { getCars } from '@/lib/mongodb';
import React from 'react';

const page = async() => {  
    const data = await getCars();
    const aa = users;
    return (
        <div>
            explore car{aa.length}
            <h2>name is: {aa[0].name}</h2>
        </div>
    );
};

export default page;