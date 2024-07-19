'use client'

import React from 'react';
import FlipCard from '@/components/MeetTeam';

// const teamMembers = [
//   { id: 1, name: 'Brian Galyen', position: 'Founder & Lead Developer', imageUrl: '/BrianG.webp' },
//   { id: 2, name: 'Devon Whitaker', position: 'Co-Founder & Developer', imageUrl: '/DevonW.webp' },
//   { id: 3, name: 'Joanna Underwood', position: 'Co-Founder & Designer', imageUrl: '/JoannaU.png' },
// ];

type Team = {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: 'x' | 'y';
};

const team: Team[] = [
  { description: 'Lead Developer', image: '/SeeYouThursdayGlass.png', rotate: 'y', subtitle: 'Founder', title: 'Brian Galyen' },
  { description: 'Developer', image: '/devon-thinks.webp', rotate: 'y', subtitle: 'Co-Founder', title: 'Devon Whitaker' },
  { description: 'Designer', image: '/JojoU.webp', rotate: 'y', subtitle: 'Co-Founder', title: 'Joanna Underwood' }
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="py-12 w-screen" id="ourCrew">
      <div className="text-center">
        <h3 className="inline-block bg-purple-200 text-purple-800 px-4 py-4 rounded-full text-3xl font-semibold uppercase tracking-wide">
          Our Crew
        </h3>
        <h2 className="mt-8 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Meet The Team
        </h2>
        <p className="mt-4 mb-16 max-w-2xl text-xl text-white md:mx-auto lg:mx-auto">
          We&apos;re passionate about our work and grateful for the incredible people we collaborate with. Meet our amazing team below.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 object-left-bottom">
        {team.map((team, index) => (
          <FlipCard
           key={index} 
            description={team.description}
            image={team.image}
            rotate={team.rotate}
            subtitle={team.subtitle}
            title={team.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
