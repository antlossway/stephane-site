import React from 'react'
import Link from 'next/link'

export default function Button({text, url}) {
  return (
    <Link className='px-6 py-2 rounded-full bg-transparent border border-slate-500 hover:bg-white hover:opacity-50 dark:border-none dark:bg-slate-500 dark:hover:bg-slate-300 dark:text-white'
        href="/">{text}</Link>
  )
}
