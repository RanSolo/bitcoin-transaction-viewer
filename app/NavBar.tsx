import Link from 'next/link'
import React from 'react'
import { PiAnchorSimpleBold } from "react-icons/pi";

const Component = () => {
    const links = [
        { href: '/transactions', label: 'Dashboard' },
    ]
    return <nav className="flex bg-slate-100 space-x-6 border-b px-5 h-14 items-center">
        <Link href="/">
            <PiAnchorSimpleBold className="text-2xl" />
        </Link>
        <ul className="flex space-x-6">
            {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                    <Link 
                        className="px-10 text-zinc-500 hover:text-zinc-800 transition-colors"  
                        href={href}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>;
}

export default Component
