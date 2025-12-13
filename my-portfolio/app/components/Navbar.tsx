"use client"
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 bg-white dark:bg-black border-b border-black/[.08] dark:border-white/[.145]">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black dark:text-zinc-50">
          My Portfolio
        </div>
        <div className="space-x-6">
          <a
            href="#home"
            className="text-black dark:text-zinc-50 hover:underline"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black dark:text-zinc-50 hover:underline"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black dark:text-zinc-50 hover:underline"
          >
            Projects
          </a>  
          <a
            href="#contact"
            className="text-black dark:text-zinc-50 hover:underline"
          >
            Contact
          </a>
          </div>
          </div>
    </nav>
          )}