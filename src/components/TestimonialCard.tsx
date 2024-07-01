import { Flower } from 'lucide-react';
import React from 'react';

type Props<T> = {
    title: T;
    desc: T;
}

function TestimonialCard({ title, desc }: Props<string>) {
    return (
        <div className='w-full group cursor-pointer flex flex-col justify-center items-center border-2 border-yellow-600 gap-3 md:gap-8 p-2 md:p-4 rounded-xl md:rounded-md transition-transform duration-500 ease-in-out hover:bg-yellow-700 transform hover:scale-105 hover:shadow-lg'>
            <div className='text-white font-Playwrite text-2xl md:text-4xl text-center'>
                {title}
            </div>
            <Flower className='transition-transform duration-500 ease-in-out group-hover:rotate-180' color='white' size={30} />
            <div className='text-white text-center text-sm md:text-lg'>
                {desc}
            </div>
        </div>
    );
}

export default TestimonialCard;
