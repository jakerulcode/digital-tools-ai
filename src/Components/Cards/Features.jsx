import { Check } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {

    

    // console.log(feature)
    return (
        
            <p className='flex gap-1.5 items-center text-[#627382]'><span className='text-success'><Check /></span>{feature}</p>
        
    );
};

export default Features;