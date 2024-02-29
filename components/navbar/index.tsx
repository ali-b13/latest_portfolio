import React from 'react'
import Logo from '../logo'
import {navLinks, social_media_accounts} from '@/lib/place-holder-data' 
import MobileNavbar from './mobile-navbar'
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className={`  w-full flex justify-between mt-10 items-center text-sm sticky top-10 z-50`}>
        <section className='hidden md:flex w-full  justify-between'>
            <div className='flex justify-between items-center gap-12 mx-12 '>
         <Logo/>
         <div className='flex gap-6'>
             {
                navLinks.map((link)=>{
                    return (
                        <Link href={link.href} key={link.title}>{link.title}</Link>
                    )
                })
             }
         </div>
      </div>
      <div className='flex gap-4 mx-12 items-center'>
          {
            social_media_accounts.map((link)=>{
                return(
                    <Link key={link.href} href={link.href}>{link.icon}</Link>
                )
            })
          }
      </div>
        </section>
        <MobileNavbar/>
    </nav>
  )
}

export default Navbar