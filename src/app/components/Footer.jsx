import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-blue-900 text-white h-[100px] flex items-center justify-center text-3xl'>
        <p>&copy; Univelsity {new Date().getFullYear()} </p>
    </footer>
  )
}
