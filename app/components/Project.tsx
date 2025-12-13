import React from 'react';

type ProjectProps = {
    title: string;
    description: string;
    link?: string;
    };

    export const Project = ({ title, description,link }: ProjectProps) => { 
return (   
    <div className="border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition">

<h3 className='text-xl font-semibold mb-2'>{title}</h3>
<p className="text-gray-600 mb-4">{description}</p>   
<p className="text-gray-600 mb-4">{link}</p>   
</div> 
)

           }