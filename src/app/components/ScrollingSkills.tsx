'use client';

import Image from 'next/image';
import React from 'react';

type Skill = {
  label: string;
  src?: string;
};

const skills: Skill[] = [
  {label: 'CompTIA Security+', src: '/comptia.jpg'},
  { label: 'Next.js', src: '/Next.js.svg' },
  { label: 'React', src: '/react.svg' },
  { label: 'Storybook', src: '/storybook.svg' },
  { label: 'JavaScript', src: '/javascript.png' },
  { label: 'TypeScript', src: '/typescript.svg' },
  { label: 'Node.js', src: '/node.svg' },
  { label: 'Tailwind CSS', src: '/tailwind.svg' },
  { label: 'WordPress', src: '/wordpress.svg' },
  { label: 'Vercel', src: '/vercel.svg' },
  { label: 'Vue.js', src: '/vue-js.jpeg' },
  { label: 'SendGrid', src: '/sendgrid.svg' },
  { label: 'Apps Script', src: '/apps_script.svg' },
  { label: 'TanStack Query', src: '/tan_stack.png' },
];

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const content = skill.src ? (
    <Image
      className="block"
      src={skill.src}
      width={56}
      height={56}
      alt={skill.label}
      style={{ width: '56px', height: '56px', objectFit: 'contain' }}
    />
  ) : (
    <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 grid place-items-center text-sm font-medium">
      {skill.label.split(' ').map((w) => w[0]).join('').slice(0, 3)}
    </div>
  );

  const iconBox = (
    <div className="w-full h-16 flex items-center justify-center">
      {content}
    </div>
  );

  return (
    <li className="m-1 shrink-0">
      <div className="flex flex-col items-center w-full" aria-label={skill.label}>
        {iconBox}
        {/* <span className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">{skill.label}</span> */}
      </div>
    </li>
  );
};

export default function ScrollingSkills() {
  return (
    <div
      className="w-full min-w-0 relative overflow-hidden py-2 tech-marquee"
      aria-label="Technology stack"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <ul
        className="marquee"
        role="list"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {skills.map((skill) => (
          <SkillBadge key={`a-${skill.label}`} skill={skill} />
        ))}
        {skills.map((skill) => (
          <SkillBadge key={`b-${skill.label}`} skill={skill} />
        ))}
        {skills.map((skill) => (
          <SkillBadge key={`c-${skill.label}`} skill={skill} />
        ))}
        {skills.map((skill) => (
          <SkillBadge key={`d-${skill.label}`} skill={skill} />
        ))}
      </ul>
      {/* Styling moved to global CSS to avoid scoping issues within transitions */}
    </div>
  );
}
