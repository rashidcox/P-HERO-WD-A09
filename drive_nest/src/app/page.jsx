import AvailableCars from '@/components/cards/AvailableCars';
import Rewies from '@/components/cards/Rewies';
import WhyChooseUs from '@/components/cards/WhyChooseUs';
import Hero from '@/components/hero/Hero';
import React from 'react';

const page = () => {
    return (
        <div>
            <section><Hero /></section>
            <section><AvailableCars/></section>
            <section><WhyChooseUs /> </section>
            <section><Rewies /></section>
        </div>
    );
};

export default page;