'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800/70 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-neutral-700 dark:text-neutral-300">
          <span className="font-semibold">HarolDeveloper</span>
          <span className="mx-2">•</span>
          <span>Full-stack developer</span>
        </div>

        {/* <nav className="flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="/about" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 rounded-sm">About</a>
          <a href="/blog" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 rounded-sm">Blog</a>
          <a href="/devProjects" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 rounded-sm">Work</a>
        </nav> */}

        <div className="flex items-center gap-3">
          <a
            href="https://harold-mesa.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode blog"
            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <SiHashnode size={18} />
          </a>
          <a
            href="https://github.com/curiousmockingbird"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/haroldmesa93/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
