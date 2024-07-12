'use client'

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'Brian Galyen', position: 'Founder & Lead Developer', imageUrl: '/BrianG.webp' },
  { id: 2, name: 'Devon Whitaker',  position: 'Co-Founder & Developer', imageUrl: '/DevonW.webp' },
  { id: 3, name: 'Joanna Underwood',  position: 'Co-Founder & Designer', imageUrl: '/JoannaU.png' },
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="py-12 w-screen" id='ourCrew'>
      <div className="text-center">
        <h3 className="inline-block bg-purple-200 text-purple-800 px-4 py-4 rounded-full text-3xl font-semibold uppercase tracking-wide">
          Our Crew
        </h3>
        <h2 className="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Meet The Team
        </h2>
        <p className="mt-4 mb-16 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        We&apos;re passionate about our work and grateful for the incredible people we collaborate with. Meet our amazing team below.
        </p>
      </div>
      <div className={`"mt-10 grid gap-y-10 grid-cols-3 gap-x-6 lg:grid-cols-${teamMembers.length} lg:gap-x-8"`}>
        {teamMembers.map((member) => (
          <div key={member.id}>
            <div className="full w-full pt-28 pb-72 bg-gray-200 rounded-lg overflow-hidden lg:pb-80 relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                quality={100}
                width={480}
                height={480}
                objectFit="contain"
                objectPosition="center"
                className="absolute inset-0"
               />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className='text-white'>
              {member.name} </p>
              <p className='text-white'>
                {member.position} 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
